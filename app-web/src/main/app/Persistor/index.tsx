import React, { PropsWithChildren, ReactElement } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from '../../components/SplashScreen';
import { persistor } from '../store';

export default function Persistor({ children }: PropsWithChildren<any>): ReactElement {
    return (
        <PersistGate persistor={persistor} loading={<SplashScreen />}>
            {children}
        </PersistGate>
    );
}
