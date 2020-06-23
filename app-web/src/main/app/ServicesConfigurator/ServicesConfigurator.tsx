import React, { ReactElement, useEffect } from 'react';
import { setCurrentAccessToken } from '../../services';
import { Props } from './types';

export default function ServicesConfigurator({ accessToken }: Props): ReactElement {
    useEffect(() => {
        accessToken ? setCurrentAccessToken(accessToken) : setCurrentAccessToken('');
    }, [accessToken]);
    return <></>;
}
