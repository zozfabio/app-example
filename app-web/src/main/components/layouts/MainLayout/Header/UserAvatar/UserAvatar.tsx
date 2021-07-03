import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { MouseEvent, ReactElement, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../../../modules/Auth/routes';
import { home } from '../../../../../modules/Site/routes';

export default function UserAvatar(): ReactElement {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget), [
        setAnchorEl,
    ]);
    const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);

    const itens = [];

    itens.push(
        <MenuItem
            key="site"
            onClick={() => {
                handleClose();
                history.replace(home.path);
            }}
        >
            <ListItemText>Site</ListItemText>
        </MenuItem>
    );

    itens.push(
        <MenuItem
            key="logout"
            onClick={() => {
                handleClose();
                history.replace(logout.path);
            }}
        >
            <ListItemText>Logout</ListItemText>
        </MenuItem>
    );

    return (
        <div>
            <Button aria-controls="user-avatar-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircle />
            </Button>
            <Menu
                id="user-avatar-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {itens}
            </Menu>
        </div>
    );
}
