import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { getBaseUrl } from '../../helpers';

const baseUrl = getBaseUrl();

let currentAccessToken = '';

export function setCurrentAccessToken(accessToken: string): void {
    currentAccessToken = accessToken;
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

function makeRequest<T>(
    method: string,
    url: string,
    accept: string,
    contentType?: string,
    body?: string | URLSearchParams
): Observable<T> {
    return ajax({
        method,
        body,
        url: `${baseUrl}${url}`,
        headers: makeHeaders(accept, contentType),
        responseType: 'json',
    }).pipe(
        map<AjaxResponse, T>(res => (typeof res.response === 'string' ? JSON.parse(res.response) : res.response))
    );
}

export function getJson<T>(url: string): Observable<T> {
    return makeRequest('GET', url, 'application/json');
}

export function postJson<T>(url: string, body: Record<string, never>): Observable<T> {
    return makeRequest('POST', url, 'application/json', 'application/json', JSON.stringify(body));
}

export function postForm<T>(url: string, body: Record<string, never>): Observable<T> {
    return makeRequest('POST', url, 'application/json', 'application/x-www-form-urlencoded', new URLSearchParams(body));
}
