import { Breadcrumbs, Link } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { home } from '../../../../modules/Main/routes';
import { useLayoutContext } from '../../../Layout';
import { LayoutBreadcrumb } from '../../../Layout/Provider/types';

export default function Breadcrumb(): ReactElement {
    const { breadcrumb } = useLayoutContext();
    return (
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to={home.path}>
                Home
            </Link>
            {breadcrumb.map((item: LayoutBreadcrumb) => (
                <Link color="inherit" key={item.path} component={RouterLink} to={item.path}>
                    {item.title}
                </Link>
            ))}
        </Breadcrumbs>
    );
}
