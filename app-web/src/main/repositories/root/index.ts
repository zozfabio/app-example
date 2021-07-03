import { Observable, of } from 'rxjs';
import { RootResult } from './types';

export function mockRoot(): Observable<RootResult> {
    return of({
        _links: {
            login: {
                href: `${process.env.REACT_APP_API_BASE_URL}/login`,
            },
        },
    });
}

export function getRootJson(): Observable<RootResult> {
    return mockRoot();
}
