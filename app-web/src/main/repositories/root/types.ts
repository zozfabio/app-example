import { Link } from '../types';

export interface RootLinks extends Record<string, any> {
    readonly login: Link;
}

export interface RootResult extends Record<string, any> {
    readonly _links: RootLinks;
}

// export interface Person {
//     readonly id: number;
//     readonly name: string;
// }
