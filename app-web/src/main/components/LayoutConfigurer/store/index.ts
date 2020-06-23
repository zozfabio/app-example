import { createReducer, Reducer } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { AppState } from '../../../app/store/types';
import { LayoutBreadcrumb, LayoutState } from './types';
import { setBreadcrumb, setMaximized } from './actions';

const initialState: LayoutState = {
    maximized: false,
    breadcrumb: [],
};

const layoutReducer: Reducer<LayoutState, { type: string; payload: LayoutState }> = createReducer(initialState)
    .handleAction(
        setMaximized,
        (state: LayoutState, action: { type: string; payload: Pick<LayoutState, 'maximized'> }) => ({
            ...state,
            ...action.payload,
        })
    )
    .handleAction(
        setBreadcrumb,
        (state: LayoutState, action: { type: string; payload: Pick<LayoutState, 'breadcrumb'> }) => ({
            ...state,
            ...action.payload,
        })
    );

export default layoutReducer;

export const getMaximized = createSelector(
    (state: AppState): boolean => state.layout.maximized,
    (maximized: boolean): boolean => maximized
);
export const getBreadcrumb = createSelector(
    (state: AppState): LayoutBreadcrumb[] => state.layout.breadcrumb,
    (breadcrumb: LayoutBreadcrumb[]): LayoutBreadcrumb[] => breadcrumb
);
