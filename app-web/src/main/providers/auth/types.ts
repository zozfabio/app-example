import { PropsWithChildren } from 'react';
import { LoginInput } from '../../repositories/auth/types';

export interface AuthContextType {
    readonly accessToken?: string;
    readonly refreshToken?: string;
    readonly error?: Error;
    readonly isAuthenticated: () => boolean;
    readonly login: (input: LoginInput) => void;
    readonly logout: () => void;
}

export type Props = PropsWithChildren<unknown>;
