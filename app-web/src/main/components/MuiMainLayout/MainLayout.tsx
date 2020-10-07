import React, { ReactElement, useEffect } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { Props } from './types';
import Sider from './Sider';
import Header from './Header';
import useStyles from './styles';
import useSiderStyles from './Sider/styles';

export default function MainLayout({ children, maximized, setMaximized }: Props): ReactElement {
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const classes = useStyles();
    const siderClasses = useSiderStyles();

    useEffect(() => {
        setMaximized(!matches);
    }, [setMaximized, matches]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Sider />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: !maximized,
                })}
            >
                <div className={siderClasses.drawerHeader} />
                <div className={siderClasses.drawerHeader} />
                <Box border={1} borderColor="grey.300">
                    {children}
                </Box>
            </main>
        </div>
    );
}
