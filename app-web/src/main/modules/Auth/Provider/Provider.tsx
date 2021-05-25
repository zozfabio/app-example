import React, { ReactElement, useMemo, useState } from 'react';
import { login } from '../../../services/auth';
import { isTokenExpired, readAccessToken } from '../../../services/auth/helpers';
import { LoginInput } from '../../../services/auth/types';
import { AuthContext } from './context';
import { AuthContextType, Props } from './types';

export default function AuthProvider({ children }: Props): ReactElement {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [error, setError] = useState<Error>();

    const context = useMemo(
        () =>
            ({
                accessToken,
                refreshToken,
                isAuthenticated,
                error,
                login(input: LoginInput) {
                    login(input).subscribe(
                        result => {
                            const accessToken = readAccessToken(result.accessToken);
                            setIsAuthenticated(accessToken && !isTokenExpired(accessToken));
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
        [
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken,
            isAuthenticated,
            setIsAuthenticated,
            error,
            setError,
        ]
    );
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
