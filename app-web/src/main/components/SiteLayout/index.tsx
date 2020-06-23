import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import { Props } from './types';

export default function SiteLayout({ children }: Props): ReactElement {
    return (
        <Layout>
            <Header />
            <Layout.Content style={{ padding: '0 50px' }}>
                <Breadcrumb />
                <div style={{ background: '#fff', padding: '24px', minHeight: '280px' }}>{children}</div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
        </Layout>
    );
}
