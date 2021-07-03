import React, { ReactElement, useEffect } from 'react';
import { useAuthContext } from '../../../providers';
import { setCurrentAccessToken } from './index';

export default function Config(): ReactElement {
    const { accessToken } = useAuthContext();
    useEffect(() => {
        accessToken ? setCurrentAccessToken(accessToken) : setCurrentAccessToken('');
    }, [accessToken]);
    return <></>;
}
