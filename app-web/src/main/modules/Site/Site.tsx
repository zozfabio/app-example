import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import SiteLayout from '../../components/SiteLayout';
import Layout from '../../components/Layout';
import ExampleContents from '../../components/ExampleContents';
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
