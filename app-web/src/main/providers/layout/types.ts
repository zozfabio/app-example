import { PropsWithChildren } from 'react';

export interface LayoutBreadcrumb {
    readonly title: string;
    readonly path: string;
}

export interface LayoutContextType {
    readonly menuExpanded: boolean;
    readonly breadcrumbs: LayoutBreadcrumb[];
    readonly setMenuExpanded: (menuExpanded: boolean) => void;
    readonly toggleMenuExpanded: () => void;
    readonly setBreadcrumb: (breadcrumb: LayoutBreadcrumb[]) => void;
}

export type Props = PropsWithChildren<unknown>;
