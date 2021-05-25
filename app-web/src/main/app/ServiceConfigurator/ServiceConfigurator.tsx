import React, { ReactElement, useEffect } from 'react';
import { useAuthContext } from '../../modules/Auth';
import { setCurrentAccessToken } from '../../services';

export default function ServiceConfigurator(): ReactElement {
    const { accessToken } = useAuthContext();
    useEffect(() => {
        accessToken ? setCurrentAccessToken(accessToken) : setCurrentAccessToken('');
    }, [accessToken]);
    return <></>;
}
