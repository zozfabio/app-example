import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
import SiteLayout from '../../components/layouts/SiteLayout';
import ReactApp from '../../components/miscellaneous/ReactApp';
import { home } from './routes';

export default function Site(): ReactElement {
    return (
        <SiteLayout>
            <Route
                {...home}
                render={() => (
                    <Layout breadcrumb={[]}>
                        <ReactApp />
                    </Layout>
                )}
            />
        </SiteLayout>
    );
}
