import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ServicesConfigurator from './ServicesConfigurator';
import Persistor from './Persistor';
import Router from './Router';
import './styles.less';

export default function App(): ReactElement {
    return (
        <Provider store={store}>
            <ServicesConfigurator />
            <Persistor>
                <Router />
            </Persistor>
        </Provider>
    );
}
