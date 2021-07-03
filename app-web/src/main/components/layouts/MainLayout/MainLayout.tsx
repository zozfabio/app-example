import { Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { ReactElement, useEffect } from 'react';
import { useLayoutContext } from '../../../providers';
import Header from './Header';
import Sider from './Sider';
import useStyles from './styles';
import { Props } from './types';

export default function MainLayout({ children }: Props): ReactElement {
    const classes = useStyles();
    const { setMenuExpanded, menuExpanded } = useLayoutContext();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    useEffect(() => {
        setMenuExpanded(matches);
    }, [setMenuExpanded, matches]);

    return (
        <>
            <Header />
            <Sider />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: menuExpanded,
                })}
            >
                {children}
            </main>
        </>
    );
}
