import React, { ReactElement } from 'react';
import AuthProvider from './auth';
import LayoutProvider from './layout';
import ThemeProvider from './theme';
import { Props } from './types';

export { useAuthContext } from './auth';
export { useLayoutContext } from './layout';

export default function AppProvider({ children }: Props): ReactElement {
    return (
        <LayoutProvider>
            <AuthProvider>
                <ThemeProvider>{children}</ThemeProvider>
            </AuthProvider>
        </LayoutProvider>
    );
}
