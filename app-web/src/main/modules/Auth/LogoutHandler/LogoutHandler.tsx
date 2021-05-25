import React, { ReactElement, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { home } from '../../Site/routes';
import { useAuthContext } from '../Provider/hooks';
import { logout as logoutRoute } from '../routes';

export default function LogoutHandler(): ReactElement {
    const { logout } = useAuthContext();
    useEffect(() => {
        logout();
    }, [logout]);
    return <Redirect from={logoutRoute.path} to={home.path} />;
}
