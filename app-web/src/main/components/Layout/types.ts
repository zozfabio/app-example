import { ReactElement } from 'react';
import { LayoutBreadcrumb } from './Provider/types';

export interface OwnProps {
    children?: ReactElement;
    breadcrumb?: LayoutBreadcrumb[];
}

export type Props = OwnProps;
