import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import MenuToggle from './MenuToggle';
import { Props } from './types';
import useStyles from './styles';
import UserAvatar from './UserAvatar';
import Breadcrumb from './Breadcrumb';
import Divider from '@material-ui/core/Divider';

export default function Header({ maximized }: Props): ReactElement {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: !maximized,
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
