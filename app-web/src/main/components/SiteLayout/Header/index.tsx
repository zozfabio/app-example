import React, { ReactElement } from 'react';
import { Layout } from 'antd';
import Logo from './Logo';
import Menu from './Menu';

export default function Header(): ReactElement {
    return (
        <Layout.Header>
            <Logo />
            <Menu />
        </Layout.Header>
    );
}
