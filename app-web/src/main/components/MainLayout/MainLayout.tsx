import { Paper, useMediaQuery } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { ReactElement, useEffect } from 'react';
import { useLayoutContext } from '../Layout';
import Header from './Header';
import Sider from './Sider';
import useSiderStyles from './Sider/styles';
import useStyles from './styles';
import { Props } from './types';

export default function MainLayout({ children }: Props): ReactElement {
    const classes = useStyles();
    const siderClasses = useSiderStyles();
    const { setMenuExpanded, menuExpanded } = useLayoutContext();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    useEffect(() => {
        setMenuExpanded(matches);
    }, [setMenuExpanded, matches]);

    return (
        <div className={classes.root}>
            <Header />
            <Sider />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: menuExpanded,
                })}
            >
                <div className={siderClasses.drawerHeader} />
                <div className={siderClasses.drawerHeader} />
                <Paper>{children}</Paper>
            </main>
        </div>
    );
}
