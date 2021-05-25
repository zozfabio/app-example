import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { useLayoutContext } from '../../../Layout';
import useStyles from './styles';

export default function MenuToggle(): ReactElement {
    const classes = useStyles();
    const { toggleMenuExpanded, menuExpanded } = useLayoutContext();

    return (
        <IconButton
            color="inherit"
            aria-label="Abrir Menu"
            onClick={toggleMenuExpanded}
            edge="start"
            className={clsx(classes.menuButton, {
                [classes.hide]: menuExpanded,
            })}
        >
            <MenuIcon />
        </IconButton>
    );
}
