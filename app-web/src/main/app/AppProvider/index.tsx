import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { ReactElement, ReactNode } from 'react';
import LayoutProvider from '../../components/Layout/Provider';
import AuthProvider from '../../modules/Auth/Provider';
import theme from '../theme';

export interface OwnProps {
    children: ReactNode;
}

export type Props = OwnProps;

export default function AppProvider({ children }: Props): ReactElement {
    return (
        <AuthProvider>
            <LayoutProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </LayoutProvider>
        </AuthProvider>
    );
}
