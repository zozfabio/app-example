import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { drawerWidth } from './Sider/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            background: theme.palette.background.default,
            overflowY: 'scroll',
            marginLeft: -drawerWidth,
            marginTop: '57px',
            marginRight: '0',
            height: 'calc(100hv - 114px)',
            [`@media (min-width:0px) and (orientation: landscape)`]: {
                marginTop: '49px',
                height: 'calc(100hv - 98px)',
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '65px',
                height: 'calc(100hv - 130px)',
            },
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    })
);
