import React, { ReactElement } from 'react';
import { AppBar } from '@material-ui/core';
import Menu from './Menu';
import useStyles from './styles';

export default function Header(): ReactElement {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Menu />
        </AppBar>
    );
}
