import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import { Props } from './types';
import Sider from './Sider';
import Header from './Header';
import './styles.css';

export default function MainLayout({ children }: Props): ReactElement {
    return (
        <Layout id="component-main-layout">
            <Sider />
            <Layout>
                <Header />
                <Layout.Content style={{ margin: '133px 16px 16px', padding: '16px', background: '#fff' }}>
                    {children}
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
            </Layout>
        </Layout>
    );
}
