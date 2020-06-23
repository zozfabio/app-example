/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Observable, Subscriber } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

let baseURL: string | undefined = process.env.REACT_APP_API_BASE_URL;
const localhostIndex = baseURL?.indexOf('localhost');
if (localhostIndex !== undefined && localhostIndex > -1) {
    baseURL = baseURL?.replace('localhost', window.location.hostname);
}

export { baseURL };

let currentAccessToken = '';
export const setCurrentAccessToken = (accessToken: string): void => {
    currentAccessToken = accessToken;
};

const parseBody = (contentType?: string, body?: Record<string, any>) =>
    contentType === 'application/json'
        ? JSON.stringify(body)
        : contentType === 'application/x-www-form-urlencoded'
        ? new URLSearchParams(body)
        : null;

const makeHeaders = (accept: string, contentType?: string): HeadersInit => {
    const headers: HeadersInit = { Accept: accept };
    if (contentType) {
        headers['Content-Type'] = contentType;
    }
    if (currentAccessToken) {
        headers.Authorization = `Bearer ${currentAccessToken}`;
    }
    return headers;
};

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

const fetchRequest = (
    method: string,
    url: string,
    accept: string,
    contentType?: string,
    body?: Record<string, any>
): Promise<Response> =>
    fetch(`${baseURL}${url}`, {
        method,
        headers: makeHeaders(accept, contentType),
        body: parseBody(contentType, body),
    });

// const fetchJsonRequest = <T extends Record<string, any>>(
//     method: string,
//     url: string,
//     contentType?: string,
//     body?: Record<string, any>
// ): Promise<T> => fetchRequest(method, url, 'application/json', contentType, body).then((res: Response) => res.json());

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

const observableRequest = <T extends Record<string, any>>(
    method: string,
    url: string,
    accept: string,
    contentType?: string,
    body?: Record<string, any>
): Observable<T> =>
    ajax({
        method,
        url: `${baseURL}${url}`,
        body,
        headers: makeHeaders(accept, contentType),
    }).pipe(map<AjaxResponse, T>(res => res.response));

export const postJson = <T extends Record<string, any>>(url: string, body: Record<string, any>): Observable<T> =>
    observableRequest('POST', url, 'application/json', 'application/json', body);

export const postForm = <T extends Record<string, any>>(url: string, body: Record<string, string>): Observable<T> =>
    observableRequest('POST', url, 'application/json', 'application/x-www-form-urlencoded', body);

export const getJson = <T extends Record<string, any>>(url: string): Observable<T> =>
    observableRequest('GET', url, 'application/json');

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
