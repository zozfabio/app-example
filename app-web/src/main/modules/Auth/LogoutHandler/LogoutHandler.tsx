import React, { ReactElement, useEffect } from 'react';
import { Props } from './types';
import { logout as logoutRoute } from '../routes';
import { home } from '../../Site/routes';
import { Redirect } from 'react-router-dom';

export default function LogoutHandler({ logout }: Props): ReactElement {
    useEffect(() => {
        logout();
    }, [logout]);
    return <Redirect from={logoutRoute.path} to={home.path} />;
}
