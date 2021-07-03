import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
import MainLayout from '../../components/layouts/MainLayout';
import ReactApp from '../../components/miscellaneous/ReactApp';
import { useAuthContext } from '../../providers';
import { login } from '../Auth/routes';
import { home, nav1, nav2 } from './routes';

export default function Main(): ReactElement {
    const { isAuthenticated } = useAuthContext();
    return (
        <>
            {isAuthenticated() ? (
                <MainLayout>
                    <Route
                        {...home}
                        render={() => (
                            <Layout breadcrumb={[]}>
                                <ReactApp />
                            </Layout>
                        )}
                    />
                    <Route
                        {...nav1}
                        render={() => (
                            <Layout breadcrumb={[{ title: 'Nav 1', path: nav1.path }]}>
                                <h1>Nav1</h1>
                            </Layout>
                        )}
                    />
                    <Route
                        {...nav2}
                        render={() => (
                            <Layout breadcrumb={[{ title: 'Nav 2', path: nav2.path }]}>
                                <h1>Nav2</h1>
                            </Layout>
                        )}
                    />
                </MainLayout>
            ) : (
                <Redirect to={login.path} />
            )}
        </>
    );
}
