import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { NavigateNext } from '@material-ui/icons';
import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { home } from '../../../../modules/Site/routes';
import { useLayoutContext } from '../../../../providers';
import { LayoutBreadcrumb } from '../../../../providers/layout/types';

export default function Breadcrumb(): ReactElement {
    const { breadcrumbs } = useLayoutContext();
    return (
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to={home.path}>
                Home
            </Link>
            {breadcrumbs.map((item: LayoutBreadcrumb) => (
                <Link color="inherit" key={item.path} component={RouterLink} to={item.path}>
                    {item.title}
                </Link>
            ))}
        </Breadcrumbs>
    );
}
