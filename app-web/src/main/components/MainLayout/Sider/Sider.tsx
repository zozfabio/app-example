import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { ReactElement } from 'react';
import { useLayoutContext } from '../../Layout';
import Menu from './Menu';
import useStyles from './styles';

export default function Sider(): ReactElement {
    const theme = useTheme();
    const classes = useStyles();
    const { setMenuExpanded, menuExpanded } = useLayoutContext();

    const handleDrawerClose = () => {
        setMenuExpanded(false);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={menuExpanded}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <Menu />
        </Drawer>
    );
}
