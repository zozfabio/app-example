import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import { Props } from './types';
import Logo from './Logo';
import Menu from './Menu';

export default function Sider({ maximized, setMaximized }: Props): ReactElement {
    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={!maximized}
            breakpoint="lg"
            collapsedWidth="80"
            onCollapse={(collapsed: boolean) => {
                setMaximized(!collapsed);
            }}
        >
            <Logo />
            <Menu />
        </Layout.Sider>
    );
}
