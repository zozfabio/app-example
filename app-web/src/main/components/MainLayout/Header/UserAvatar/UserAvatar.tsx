import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { home } from '../../../../modules/Site/routes';
import { logout } from '../../../../modules/Auth/routes';

export default function UserAvatar(): ReactElement {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const itens = [];

    itens.push(
        <MenuItem
            key="site"
            onClick={() => {
                handleClose();
                history.push(home.path);
            }}
        >
            Site
        </MenuItem>
    );

    itens.push(
        <MenuItem
            key="logout"
            onClick={() => {
                handleClose();
                history.push(logout.path);
            }}
        >
            Logout
        </MenuItem>
    );

    return (
        <div>
            <Button aria-controls="user-avatar-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircle />
            </Button>
            <Menu id="user-avatar-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {itens}
            </Menu>
        </div>
    );
}
