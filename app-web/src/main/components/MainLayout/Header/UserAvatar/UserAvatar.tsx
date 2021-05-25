import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../../modules/Auth/routes';
import { home } from '../../../../modules/Site/routes';

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
