import dayjs, { unix } from 'dayjs';
import jwt from 'jsonwebtoken';
import { AccessToken, isAccessToken, isRefreshToken, RefreshToken } from './types';

export function readAccessToken(accessToken: string): AccessToken | null {
    const map: any = jwt.decode(accessToken);
    if (isAccessToken(map)) {
        return map;
    }
    return null;
}

export function readRefreshToken(refreshToken: string): RefreshToken | null {
    const map: any = jwt.decode(refreshToken);
    if (isRefreshToken(map)) {
        return map;
    }
    return null;
}

export function isTokenExpired(accessToken: AccessToken | RefreshToken): boolean {
    return dayjs().isAfter(unix(accessToken.exp));
}
