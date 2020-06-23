import React, { ReactElement } from 'react';
import { Divider, Layout } from 'antd';
import Breadcrumb from './Breadcrumb';
import MenuToggle from './MenuToggle';
import UserAvatar from './UserAvatar';

export default function Header(): ReactElement {
    return (
        <Layout.Header
            style={{
                padding: 0,
                height: 'auto',
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                background: '#fff',
            }}
        >
            <div style={{ height: '64px' }}>
                <MenuToggle />
                <UserAvatar />
            </div>
            <Divider style={{ margin: 0 }} />
            <div>
                <Breadcrumb />
            </div>
        </Layout.Header>
    );
}
