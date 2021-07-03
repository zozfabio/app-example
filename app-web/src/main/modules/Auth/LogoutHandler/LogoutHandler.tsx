import React, { ReactElement, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../../../providers';
import { home } from '../../Site/routes';
import { logout as logoutRoute } from '../routes';

export default function LogoutHandler(): ReactElement {
    const { logout } = useAuthContext();
    useEffect(() => {
        logout();
    }, [logout]);
    return <Redirect from={logoutRoute.path} to={home.path} />;
}
