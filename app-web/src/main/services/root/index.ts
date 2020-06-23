import { Observable } from 'rxjs';
import { Request, Response, Server } from 'miragejs';
import Schema from 'miragejs/orm/schema';
import { AnyRegistry } from 'miragejs/-types';
import { getJson } from '../index';
import { RootResult } from './types';

export function getRootJson(): Observable<RootResult> {
    return getJson('');
}

export function mockRoot(server: Server): void {
    server.get('', (schema: Schema<AnyRegistry>, request: Request) => {
        return new Response(
            200,
            { 'Content-Type': 'application/json' },
            {
                _links: {
                    self: {
                        href: 'http://localhost:8080/api',
                    },
                },
            }
        );
    });
}

// export function getTestJson(): Observable<Person> {
//     return getJsonStream('/test');
// }
