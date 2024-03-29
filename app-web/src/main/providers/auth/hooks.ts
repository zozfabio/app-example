import { useContext, useMemo, useState } from 'react';
import { login } from '../../repositories';
import { isTokenExpired, readAccessToken } from '../../repositories/auth/helpers';
import { LoginInput } from '../../repositories/auth/types';
import { AuthContext } from './context';
import { AuthContextType } from './types';

export function useAuthContextFactory(): AuthContextType {
    const [accessToken, setAccessToken] = useState<string>();
    const [refreshToken, setRefreshToken] = useState<string>();
    const [error, setError] = useState<Error>();

    return useMemo(
        () =>
            ({
                accessToken,
                refreshToken,
                error,
                isAuthenticated() {
                    if (accessToken) {
                        const token = readAccessToken(accessToken);
                        return token && !isTokenExpired(token);
                    }
                    return false;
                },
                login(input: LoginInput) {
                    login(input).subscribe(
                        result => {
                            setAccessToken(result.accessToken);
                            setRefreshToken(result.refreshToken);
                        },
                        error => {
                            console.error('Error on login!', error);
                            setError(error);
                        }
                    );
                },
                logout() {
                    setAccessToken(undefined);
                    setRefreshToken(undefined);
                },
            } as AuthContextType),
        [accessToken, setAccessToken, refreshToken, setRefreshToken, error, setError]
    );
}

export function useAuthContext(): AuthContextType {
    return useContext(AuthContext);
}
