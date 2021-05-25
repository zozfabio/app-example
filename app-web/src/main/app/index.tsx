import React, { ReactElement } from 'react';
import AppProvider from './AppProvider';
import Router from './Router';
import ServiceConfigurator from './ServiceConfigurator';

export default function App(): ReactElement {
    return (
        <AppProvider>
            <ServiceConfigurator />
            <Router />
        </AppProvider>
    );
}
