import React, { ReactElement } from 'react';
import { Container, CssBaseline, Toolbar } from '@material-ui/core';
import { Props } from './types';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import useHeaderStyles from './Header/styles';

export default function SiteLayout({ children }: Props): ReactElement {
    const headerClasses = useHeaderStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <div className={headerClasses.offset} />
            <Container>
                <Toolbar>
                    <Breadcrumb />
                </Toolbar>
                {children}
            </Container>
        </React.Fragment>
    );
}
