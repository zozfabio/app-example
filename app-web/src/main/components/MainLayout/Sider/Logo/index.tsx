import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { home } from '../../../../modules/Site/routes';

export default function Index(): ReactElement {
    const history = useHistory();
    return (
        <div
            style={{
                height: '32px',
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '16px',
                cursor: 'pointer',
            }}
            onClick={() => history.push(home.path)}
        />
    );
}
