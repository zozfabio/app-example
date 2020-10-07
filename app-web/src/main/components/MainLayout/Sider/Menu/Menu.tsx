import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { nav1, nav2 } from '../../../../modules/Main/routes';
import { Props } from './types';

export default function Menu({ rootLinks, error }: Props): ReactElement {
    const history = useHistory();
    const itens = [];
    if (error) {
        itens.push(
            <ListItem button key="error">
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={error.message} />
            </ListItem>
        );
    } else {
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
    }
    return <List>{itens}</List>;
}
