import { Container, Paper, Toolbar } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import useHeaderStyles from './Header/styles';
import { Props } from './types';

export default function SiteLayout({ children }: Props): ReactElement {
    const headerClasses = useHeaderStyles();
    return (
        <React.Fragment>
            <Header />
            <div className={headerClasses.offset} />
            <Container>
                <Toolbar>
                    <Breadcrumb />
                </Toolbar>
                <Paper>{children}</Paper>
            </Container>
        </React.Fragment>
    );
}
