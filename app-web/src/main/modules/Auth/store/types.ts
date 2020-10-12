import { Error } from '../../../services/types';

export interface AuthState {
    readonly accessToken?: string;
    readonly refreshToken?: string;
    readonly error?: Error;
}

export interface LoginSuccessResult extends Record<string, any> {
    readonly accessToken: string;
    readonly refreshToken: string;
}
