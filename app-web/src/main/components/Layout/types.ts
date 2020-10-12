import { LayoutBreadcrumb } from './store/types';
import { ReactElement } from 'react';

export interface OwnProps {
    children?: ReactElement;
    breadcrumb?: LayoutBreadcrumb[];
}

export interface DispatchProps {
    setBreadcrumb: (breadcrumb: LayoutBreadcrumb[]) => void;
}

export type Props = OwnProps & DispatchProps;
