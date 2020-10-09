import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import SiteLayout from '../../components/MuiSiteLayout';
import LayoutConfigurer from '../../components/LayoutConfigurer';
import ExampleContents from '../../components/ExampleContents';
import { home } from './routes';

export default function Site(): ReactElement {
    return (
        <SiteLayout>
            <Route
                {...home}
                render={() => (
                    <LayoutConfigurer breadcrumb={[]}>
                        <ExampleContents />
                    </LayoutConfigurer>
                )}
            />
        </SiteLayout>
    );
}
