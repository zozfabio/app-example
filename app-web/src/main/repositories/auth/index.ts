import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { EMPTY, Observable, of } from 'rxjs';
import { AccessToken, LoginInput, LoginResult, RefreshToken } from './types';

export function mockLogin(input: LoginInput): Observable<LoginResult> {
    const now = dayjs();
    const oneMInFuture = now.add(1, 'minute');
    const tenMInFuture = now.add(10, 'minute');
    const threeMInFuture = now.add(3, 'minute');
    const accessToken: AccessToken = {
        sub: 'user@mail.com',
        iat: now.unix(),
        exp: tenMInFuture.unix(),
        fln: 'User Name',
        prf: ['DEVELOPER'],
    };
    const refreshToken: RefreshToken = {
        nbf: oneMInFuture.unix(),
        iat: now.unix(),
        exp: threeMInFuture.unix(),
    };
    const sAccessToken = jwt.sign(accessToken, 'secret', { algorithm: 'HS256' });
    const sRefreshToken = jwt.sign(refreshToken, 'secret', { algorithm: 'HS256' });
    if (input.username === 'user@mail.com' && input.password === 'userpass') {
        return of({
            accessToken: sAccessToken,
            refreshToken: sRefreshToken,
        });
    }
    return EMPTY;
}

export function login(input: LoginInput): Observable<LoginResult> {
    return mockLogin(input);
}
