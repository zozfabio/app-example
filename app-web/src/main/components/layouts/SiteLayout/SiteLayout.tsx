import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
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
                {children}
            </Container>
        </React.Fragment>
    );
}
