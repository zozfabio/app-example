import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SiteLayout from '../../components/SiteLayout';
import LayoutConfigurer from '../../components/LayoutConfigurer';
import { home } from '../Main/routes';
import { Props } from './types';
import { login, logout } from './routes';
import LoginPage from './LoginPage';
import LogoutHandler from './LogoutHandler';

export default function Auth({ isAuthenticated }: Props): ReactElement {
    return (
        <Switch>
            <Route {...logout} component={LogoutHandler} />
            {!isAuthenticated ? (
                <SiteLayout>
                    <Route
                        {...login}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Login', path: login.path }]}>
                                <LoginPage />
                            </LayoutConfigurer>
                        )}
                    />
                </SiteLayout>
            ) : (
                <Redirect from={login.path} to={home.path} />
            )}
        </Switch>
    );
}
