import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useLayoutContext } from '../../Layout';
import Breadcrumb from './Breadcrumb';
import MenuToggle from './MenuToggle';
import useStyles from './styles';
import UserAvatar from './UserAvatar';

export default function Header(): ReactElement {
    const classes = useStyles();
    const { menuExpanded } = useLayoutContext();

    return (
        <AppBar
            position="fixed"
            elevation={1}
            className={clsx(classes.appBar, {
                [classes.appBarShift]: menuExpanded,
            })}
        >
            <Toolbar>
                <MenuToggle />
                <div className={classes.center} />
                <UserAvatar />
            </Toolbar>
            <Divider />
            <Toolbar>
                <Breadcrumb />
            </Toolbar>
        </AppBar>
    );
}
