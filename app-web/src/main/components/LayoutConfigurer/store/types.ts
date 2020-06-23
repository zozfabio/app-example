export enum LayoutActions {
    SET_BREADCRUMB = '@layout/SET_BREADCRUMB',
    SET_MAXIMIZED = '@layout/SET_MAXIMIZED',
}

export interface LayoutBreadcrumb {
    readonly title: string;
    readonly path: string;
}

export interface LayoutState {
    readonly maximized: boolean;
    readonly breadcrumb: LayoutBreadcrumb[];
}
