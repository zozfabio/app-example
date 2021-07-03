import React, { ReactElement } from 'react';
import AppProvider from '../providers';
import { AjaxConfig, StreamConfig } from '../repositories';
import Router from './Router';
import './styles.css';

export default function App(): ReactElement {
    return (
        <AppProvider>
            <AjaxConfig />
            <StreamConfig />
            <Router />
        </AppProvider>
    );
}
