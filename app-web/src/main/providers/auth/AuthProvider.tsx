import React, { ReactElement } from 'react';
import { AuthContext } from './context';
import { useAuthContextFactory } from './hooks';
import { Props } from './types';

export default function AuthProvider({ children }: Props): ReactElement {
    const context = useAuthContextFactory();
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
