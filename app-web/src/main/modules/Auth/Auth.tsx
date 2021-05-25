import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import SiteLayout from '../../components/SiteLayout';
import { home } from '../Main/routes';
import LoginPage from './LoginPage';
import LogoutHandler from './LogoutHandler';
import { useAuthContext } from './Provider/hooks';
import { login, logout } from './routes';

export default function Auth(): ReactElement {
    const { isAuthenticated } = useAuthContext();
    return (
        <Switch>
            <Route {...logout} component={LogoutHandler} />
            {!isAuthenticated ? (
                <SiteLayout>
                    <Route
                        {...login}
                        render={() => (
                            <Layout breadcrumb={[{ title: 'Login', path: login.path }]}>
                                <LoginPage />
                            </Layout>
                        )}
                    />
                </SiteLayout>
            ) : (
                <Redirect from={login.path} to={home.path} />
            )}
        </Switch>
    );
}
