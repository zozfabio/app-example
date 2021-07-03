import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useLayoutContext } from '../../../../providers';
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
            variant="outlined"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: menuExpanded,
            })}
        >
            <Toolbar>
                <MenuToggle />
                <Breadcrumb />
                <div className={classes.center} />
                <UserAvatar />
            </Toolbar>
        </AppBar>
    );
}
