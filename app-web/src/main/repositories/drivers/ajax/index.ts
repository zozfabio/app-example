import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { getBaseUrl } from '../../helpers';

const baseUrl = getBaseUrl();

let currentAccessToken = '';

export function setCurrentAccessToken(accessToken: string): void {
    currentAccessToken = accessToken;
}

function parseBody(contentType?: string, body?: Record<string, never>): string | URLSearchParams | null {
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

function makeRequest<T extends Record<string, never>>(
    method: string,
    url: string,
    accept: string,
    contentType?: string,
    body?: Record<string, never>
): Observable<T> {
    return ajax({
        method,
        url: `${baseUrl}${url}`,
        headers: makeHeaders(accept, contentType),
        body: parseBody(contentType, body),
        responseType: 'json',
    }).pipe(
        map<AjaxResponse, T>(res => (typeof res.response === 'string' ? JSON.parse(res.response) : res.response))
    );
}

export function getJson<T extends Record<string, never>>(url: string): Observable<T> {
    return makeRequest('GET', url, 'application/json');
}

export function postJson<T extends Record<string, never>>(url: string, body: Record<string, never>): Observable<T> {
    return makeRequest('POST', url, 'application/json', 'application/json', body);
}

export function postForm<T extends Record<string, never>>(url: string, body: Record<string, never>): Observable<T> {
    return makeRequest('POST', url, 'application/json', 'application/x-www-form-urlencoded', body);
}
