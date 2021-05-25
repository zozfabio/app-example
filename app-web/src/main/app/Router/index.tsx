import React, { lazy, ReactElement, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SplashScreen from '../../components/SplashScreen';
import { login } from '../../modules/Auth/routes';
import { home as main } from '../../modules/Main/routes';
import { home as site } from '../../modules/Site/routes';

const Site = lazy(() => import('../../modules/Site'));
const Auth = lazy(() => import('../../modules/Auth'));
const Main = lazy(() => import('../../modules/Main'));

export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Suspense fallback={<SplashScreen />}>
                <Switch>
                    <Route path={site.path} component={Site} />
                    <Route path={login.path} component={Auth} />
                    <Route path={main.path} component={Main} />
                    <Redirect from="/" to={site.path} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
