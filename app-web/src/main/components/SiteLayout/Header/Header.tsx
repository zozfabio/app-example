import AppBar from '@material-ui/core/AppBar';
import React, { ReactElement } from 'react';
import Menu from './Menu';
import useStyles from './styles';

export default function Header(): ReactElement {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} variant="outlined">
            <Menu />
        </AppBar>
    );
}
