import React, { ReactElement } from 'react';
import AppProvider from './AppProvider';
import Router from './Router';
import ServiceConfigurator from './ServiceConfigurator';
import './styles.css';

export default function App(): ReactElement {
    return (
        <AppProvider>
            <ServiceConfigurator />
            <Router />
        </AppProvider>
    );
}
