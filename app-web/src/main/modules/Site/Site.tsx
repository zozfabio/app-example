import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import ExampleContents from '../../components/ExampleContents';
import Layout from '../../components/Layout';
import SiteLayout from '../../components/SiteLayout';
import { home } from './routes';

export default function Site(): ReactElement {
    return (
        <SiteLayout>
            <Route
                {...home}
                render={() => (
                    <Layout breadcrumb={[]}>
                        <ExampleContents />
                    </Layout>
                )}
            />
        </SiteLayout>
    );
}
