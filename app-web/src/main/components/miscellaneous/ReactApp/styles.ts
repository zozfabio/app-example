import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        app: {
            textAlign: 'center',
        },
        logo: {
            height: '40vmin',
            pointerEvents: 'none',
            animation: '$logoSpin infinite 20s linear',
        },
        content: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: '#000',
        },
        link: {
            color: '#61dafb',
        },
        '@keyframes logoSpin': {
            from: {
                transform: 'rotate(0deg)',
            },
            to: {
                transform: 'rotate(360deg)',
            },
        },
    })
);
