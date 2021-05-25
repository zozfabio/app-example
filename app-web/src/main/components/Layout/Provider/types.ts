import { ReactNode } from 'react';

export interface LayoutBreadcrumb {
    readonly title: string;
    readonly path: string;
}

export interface LayoutContextType {
    readonly menuExpanded: boolean;
    readonly breadcrumb: LayoutBreadcrumb[];
    readonly setMenuExpanded: (menuExpanded: boolean) => void;
    readonly toggleMenuExpanded: () => void;
    readonly setBreadcrumb: (breadcrumb: LayoutBreadcrumb[]) => void;
}

export interface OwnProps {
    readonly children: ReactNode;
}

export type Props = OwnProps;
