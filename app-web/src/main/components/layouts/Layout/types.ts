import { ReactElement } from 'react';
import { LayoutBreadcrumb } from '../../../providers/layout/types';

export interface OwnProps {
    children?: ReactElement;
    breadcrumb?: LayoutBreadcrumb[];
}

export type Props = OwnProps;
