import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { drawerWidth } from '../Sider/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            flexGrow: 1,
            background: theme.palette.common.white,
            color: theme.palette.common.black,
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        center: {
            flexGrow: 1,
        },
    })
);
