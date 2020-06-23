import { Observable } from 'rxjs';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { Request, Response, Server } from 'miragejs';
import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { postForm } from '../';
import { AccessToken, LoginInput, LoginResult, RefreshToken } from './types';

export function login(input: LoginInput): Observable<LoginResult> {
    return postForm('/login', input);
}

export function mockLogin(server: Server): void {
    const now = dayjs();
    const oneMInFuture = now.add(1, 'minute');
    const twoMInFuture = now.add(2, 'minute');
    const threeMInFuture = now.add(3, 'minute');
    const accessToken: AccessToken = {
        sub: 'user@mail.com',
        iat: now.unix(),
        exp: twoMInFuture.unix(),
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
    server.post('/login', (schema: Schema<AnyRegistry>, request: Request) => {
        const params = new URLSearchParams(request.requestBody);
        if (params.has('username') && params.has('password')) {
            const input: LoginInput = {
                username: params.get('username') as string,
                password: params.get('password') as string,
            };
            if (input.username === 'user@mail.com' && input.password === 'userpass') {
                return new Response(
                    200,
                    {
                        'Content-Type': 'application/json',
                    },
                    {
                        accessToken: sAccessToken,
                        refreshToken: sRefreshToken,
                    } as LoginResult
                );
            }
        }
        return new Response(400, {}, {});
    });
}
