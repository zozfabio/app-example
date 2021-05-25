import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { nav1, nav2 } from '../../../../modules/Main/routes';

export default function Menu(): ReactElement {
    const history = useHistory();
    const itens = [];
    itens.push(
        <ListItem button key="nav1" onClick={() => history.push(nav1.path)}>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Nav 1" />
        </ListItem>
    );
    itens.push(
        <ListItem button key="nav2" onClick={() => history.push(nav2.path)}>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Nav 2" />
        </ListItem>
    );
    return <List>{itens}</List>;
}
