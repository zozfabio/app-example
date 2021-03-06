import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { home } from '../../../modules/Site/routes';
import { LayoutBreadcrumb } from '../../Layout/store/types';
import { Props } from './types';

export default function Breadcrumb({ breadcrumb }: Props): ReactElement {
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
