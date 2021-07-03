import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { login, logout } from '../../../../../modules/Auth/routes';
import { home } from '../../../../../modules/Main/routes';
import { useAuthContext } from '../../../../../providers';

export default function Menu(): ReactElement {
    const { isAuthenticated } = useAuthContext();
    const history = useHistory();
    const itens = [];
    if (isAuthenticated()) {
        itens.push(
            <Button key="home" onClick={() => history.replace(home.path)}>
                Home
            </Button>
        );
        itens.push(
            <Button key="logout" onClick={() => history.replace(logout.path)}>
                Logout
            </Button>
        );
    } else {
        itens.push(
            <Button key="login" onClick={() => history.replace(login.path)}>
                Login
            </Button>
        );
    }
    return <Toolbar>{itens}</Toolbar>;
}
