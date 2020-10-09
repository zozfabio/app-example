import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Toolbar } from '@material-ui/core';
import { home } from '../../../../modules/Main/routes';
import { login, logout } from '../../../../modules/Auth/routes';
import { Props } from './types';

export default function Menu({ isAuthenticated }: Props): ReactElement {
    const history = useHistory();
    const itens = [];
    if (isAuthenticated) {
        itens.push(
            <Button key="home" onClick={() => history.push(home.path)}>
                Home
            </Button>
        );
        itens.push(
            <Button key="logout" onClick={() => history.push(logout.path)}>
                Logout
            </Button>
        );
    } else {
        itens.push(
            <Button key="login" onClick={() => history.push(login.path)}>
                Login
            </Button>
        );
    }
    return <Toolbar>{itens}</Toolbar>;
}
