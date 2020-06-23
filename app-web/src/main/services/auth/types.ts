export interface User {
    fullname: string;
    profiles: string[];
}

export interface AccessToken {
    sub: string;
    iat: number;
    exp: number;
    fln: string;
    prf: string[];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isAccessToken(obj: any): obj is AccessToken {
    return 'sub' in obj && 'iat' in obj && 'exp' in obj && 'fln' in obj && 'prf' in obj;
}

export interface RefreshToken {
    nbf: number;
    iat: number;
    exp: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isRefreshToken(obj: any): obj is RefreshToken {
    return 'nbf' in obj && 'iat' in obj && 'exp' in obj;
}

export interface LoginInput extends Record<string, string> {
    username: string;
    password: string;
}

export interface LoginResult extends Record<string, string> {
    readonly accessToken: string;
    readonly refreshToken: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isLoginResult(obj: any): obj is LoginResult {
    return 'accessToken' in obj && 'refreshToken' in obj;
}
