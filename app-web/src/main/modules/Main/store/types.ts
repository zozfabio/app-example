import { Error } from '../../../services/types';
import { RootLinks } from '../../../services/root/types';

export interface RootState {
    readonly links?: RootLinks;
    readonly error?: Error;
}

export interface GetRootSuccessResult extends Record<string, any> {
    readonly links: RootLinks;
}
