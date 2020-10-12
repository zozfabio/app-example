import React, { ReactElement, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import ExampleContents from '../../components/ExampleContents';
import Layout from '../../components/Layout';
import { login } from '../Auth/routes';
import { Props } from './types';
import { home, nav1, nav2 } from './routes';

export default function Main({ isAuthenticated, getRoot }: Props): ReactElement {
    useEffect(() => {
        getRoot();
    }, [getRoot]);
    return (
        <>
            {isAuthenticated ? (
                <MainLayout>
                    <Route
                        {...home}
                        render={() => (
                            <Layout breadcrumb={[]}>
                                <ExampleContents />
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
