import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu as AntdMenu } from 'antd';
import { Props } from './types';
import { login, logout } from '../../../../modules/Auth/routes';
import { home } from '../../../../modules/Main/routes';

export default function Menu({ isAuthenticated }: Props): ReactElement {
    const history = useHistory();
    const itens = [];
    if (isAuthenticated) {
        itens.push(
            <AntdMenu.Item key="home" onClick={() => history.push(home.path)}>
                Home
            </AntdMenu.Item>
        );
        itens.push(
            <AntdMenu.Item key="logout" onClick={() => history.push(logout.path)}>
                Logout
            </AntdMenu.Item>
        );
    } else {
        itens.push(
            <AntdMenu.Item key="login" onClick={() => history.push(login.path)}>
                Login
            </AntdMenu.Item>
        );
    }
    return (
        <AntdMenu theme="dark" mode="horizontal">
            {itens}
        </AntdMenu>
    );
}
