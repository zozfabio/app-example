import { createAction } from 'typesafe-actions';
import { LayoutActions, LayoutBreadcrumb } from './types';

export const setMaximized = createAction(LayoutActions.SET_MAXIMIZED, (maximized: boolean) => ({
    maximized,
}))();

export const setBreadcrumb = createAction(LayoutActions.SET_BREADCRUMB, (breadcrumb: LayoutBreadcrumb[]) => ({
    breadcrumb,
}))();
