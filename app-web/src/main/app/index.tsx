import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import store from './store';
import theme from './theme';
import ServicesConfigurator from './ServicesConfigurator';
import Persistor from './Persistor';
import Router from './Router';

export default function App(): ReactElement {
    return (
        <Provider store={store}>
            <ServicesConfigurator />
            <Persistor>
                <ThemeProvider theme={theme}>
                    <Router />
                </ThemeProvider>
            </Persistor>
        </Provider>
    );
}
