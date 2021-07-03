import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { ReactElement } from 'react';
import theme from './theme';
import { Props } from './types';

export default function ThemeProvider({ children }: Props): ReactElement {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
}
