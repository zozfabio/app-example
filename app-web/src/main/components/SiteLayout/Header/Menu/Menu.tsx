import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../../../modules/Auth';
import { login, logout } from '../../../../modules/Auth/routes';
import { home } from '../../../../modules/Main/routes';

export default function Menu(): ReactElement {
    const { isAuthenticated } = useAuthContext();
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
