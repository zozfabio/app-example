import React, { ReactElement, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import ExampleContents from '../../components/ExampleContents';
import LayoutConfigurer from '../../components/LayoutConfigurer';
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
                            <LayoutConfigurer breadcrumb={[]}>
                                <ExampleContents />
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...nav1}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Nav 1', path: nav1.path }]}>
                                <h1>Nav1</h1>
                            </LayoutConfigurer>
                        )}
                    />
                    <Route
                        {...nav2}
                        render={() => (
                            <LayoutConfigurer breadcrumb={[{ title: 'Nav 2', path: nav2.path }]}>
                                <h1>Nav2</h1>
                            </LayoutConfigurer>
                        )}
                    />
                </MainLayout>
            ) : (
                <Redirect to={login.path} />
            )}
        </>
    );
}
