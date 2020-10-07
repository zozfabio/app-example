import React, { ReactElement } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Props } from './types';
import useStyles from './styles';

export default function MenuToggle({ maximized, setMaximized }: Props): ReactElement {
    const classes = useStyles();

    const handleDrawerOpen = () => {
        setMaximized(false);
    };

    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, !maximized && classes.hide)}
        >
            <MenuIcon />
        </IconButton>
    );
}
