import { AppBar } from '@material-ui/core';
import React, { ReactElement } from 'react';
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
