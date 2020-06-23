import { Observable } from 'rxjs';
import { getJson } from '../index';
import { RootResult } from './types';

export function getRootJson(): Observable<RootResult> {
    return getJson('');
}

// export function getTestJson(): Observable<Person> {
//     return getJsonStream('/test');
// }
