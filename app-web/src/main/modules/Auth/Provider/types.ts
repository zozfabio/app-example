import { ReactNode } from 'react';
import { LoginInput } from '../../../services/auth/types';

export interface AuthContextType {
    readonly accessToken?: string;
    readonly refreshToken?: string;
    readonly isAuthenticated: boolean;
    readonly error?: Error;
    readonly login: (input: LoginInput) => void;
    readonly logout: () => void;
}

export interface OwnProps {
    readonly children: ReactNode;
}

export type Props = OwnProps;
