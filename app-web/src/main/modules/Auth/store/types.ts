import { Error } from '../../../services/types';
import { AccessToken, RefreshToken, User } from '../../../services/auth/types';

export interface AuthState {
    readonly rawAccessToken?: string;
    readonly accessToken?: AccessToken;
    readonly refreshToken?: RefreshToken;
    readonly user?: User;
    readonly error?: Error;
}

export interface LoginSuccessResult extends Record<string, any> {
    readonly rawAccessToken: string;
    readonly accessToken: AccessToken;
    readonly refreshToken: RefreshToken;
    readonly user: User;
}
