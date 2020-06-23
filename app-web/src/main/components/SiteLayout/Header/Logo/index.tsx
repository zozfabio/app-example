import React, { ReactElement } from 'react';

export default function Logo(): ReactElement {
    return (
        <div
            style={{
                width: '120px',
                height: '31px',
                background: 'rgba(255, 255, 255, 0.2)',
                margin: '16px 24px 16px 0',
                float: 'left',
                cursor: 'pointer',
            }}
        />
    );
}
