/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Observable, Subscriber} from 'rxjs';
import {getBaseUrl} from '../../helpers';

const baseUrl = getBaseUrl();

let currentAccessToken = '';
export const setCurrentAccessToken = (accessToken: string): void => {
    currentAccessToken = accessToken;
};

function parseBody(contentType?: string, body?: Record<string, any>): string | URLSearchParams | null {
    return contentType === 'application/json'
        ? JSON.stringify(body)
        : contentType === 'application/x-www-form-urlencoded'
        ? new URLSearchParams(body)
        : null;
}

function makeHeaders(accept: string, contentType?: string): HeadersInit {
    const headers: HeadersInit = { Accept: accept };
    if (contentType) {
        headers['Content-Type'] = contentType;
    }
    if (currentAccessToken) {
        headers.Authorization = `Bearer ${currentAccessToken}`;
    }
    return headers;
}

function makeTextDecoder(): TransformStream {
    // eslint-disable-next-line no-undef
    return new TextDecoderStream();
}

function makeJsonDecoder(): TransformStream {
    // eslint-disable-next-line no-undef
    return new TransformStream({
        start(controller: TransformStreamDefaultController<string>) {
            // @ts-ignore
            controller.buf = '';
            // @ts-ignore
            controller.pos = 0;
        },
        transform(chunk: string, controller: TransformStreamDefaultController<string>) {
            // @ts-ignore
            controller.buf += chunk;
            // @ts-ignore
            while (controller.pos < controller.buf.length) {
                // @ts-ignore
                if (controller.buf[controller.pos] === '\n') {
                    // @ts-ignore
                    const line = controller.buf.substring(0, controller.pos);
                    controller.enqueue(JSON.parse(line));
                    // @ts-ignore
                    controller.buf = controller.buf.substring(controller.pos + 1);
                    // @ts-ignore
                    controller.pos = 0;
                } else {
                    // @ts-ignore
                    ++controller.pos;
                }
            }
        },
    });
}

function makeWriteableEventStream(eventTarget: EventTarget): WritableStream {
    return new WritableStream<Record<any, unknown>>({
        start(controller: WritableStreamDefaultController) {
            eventTarget.dispatchEvent(new Event('start'));
        },
        write(message: Record<any, unknown>, controller: WritableStreamDefaultController) {
            eventTarget.dispatchEvent(new MessageEvent('message', { data: message }));
        },
        close() {
            eventTarget.dispatchEvent(new CloseEvent('close'));
        },
        abort(reason) {
            eventTarget.dispatchEvent(new CloseEvent('abort', { reason }));
        },
    });
}

function fetchRequest(
    method: string,
    url: string,
    accept: string,
    contentType?: string,
    body?: Record<string, any>
): Promise<Response> {
    return fetch(`${baseUrl}${url}`, {
        method,
        headers: makeHeaders(accept, contentType),
        body: parseBody(contentType, body),
    });
}

export function fetchStreamJsonRequest(
    method: string,
    url: string,
    contentType?: string,
    body?: Record<string, any>
): EventTarget {
    const eventTarget = new EventTarget();
    fetchRequest(method, url, 'application/stream+json', contentType, body)
        .then((response: Response) => {
            if (response.body) {
                response.body
                    .pipeThrough(makeTextDecoder())
                    .pipeThrough(makeJsonDecoder())
                    .pipeTo(makeWriteableEventStream(eventTarget))
                    .catch(error => eventTarget.dispatchEvent(new CustomEvent('error', { detail: error })));
            } else {
                eventTarget.dispatchEvent(new ErrorEvent('error', { message: 'Empty response body!' }));
            }
        })
        .catch(error => eventTarget.dispatchEvent(new CustomEvent('error', { detail: error })));
    return eventTarget;
}

export const getJsonStream = <T extends Record<string, any>>(url: string): Observable<T> => {
    return new Observable<T>((observer: Subscriber<T>) => {
        const eventTarget = fetchStreamJsonRequest('GET', url);
        eventTarget.addEventListener('error', (event: Event) => {
            if (event instanceof CustomEvent) {
                if (event.detail instanceof Error) {
                    observer.error(event.detail.message);
                } else if (typeof event.detail === 'string') {
                    observer.error(event.detail);
                } else {
                    observer.error('jsonStream: unknown error!');
                    console.warn('jsonStream: unknown error!', event.detail);
                }
            } else if (event instanceof ErrorEvent) {
                observer.error(event.message);
            } else {
                console.warn('jsonStream: unknown error event!');
            }
        });
        eventTarget.addEventListener('abort', (event: Event) => {
            if (event instanceof CloseEvent) {
                observer.complete();
            } else {
                console.warn('jsonStream: unknown abort event!');
            }
        });
        eventTarget.addEventListener('message', (event: Event) => {
            if (event instanceof MessageEvent) {
                observer.next(event.data);
            } else {
                console.warn('jsonStream: unknown message event!');
            }
        });
        eventTarget.addEventListener('close', (event: Event) => {
            if (event instanceof CloseEvent) {
                observer.complete();
            } else {
                console.warn('jsonStream: unknown close event!');
            }
        });
    });
};
