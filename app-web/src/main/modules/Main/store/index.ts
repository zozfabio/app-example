import { createReducer, Reducer } from 'typesafe-actions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Error } from '../../../services/types';
import { GetRootSuccessResult, RootState } from './types';
import { getRoot } from './actions';
import { createSelector } from 'reselect';
import { AppState } from '../../../app/store/types';
import { RootLinks } from '../../../services/root/types';

const initialState: RootState = {
    links: undefined,
    error: undefined,
};

const rootReducer: Reducer<RootState, { type: string; payload: RootState }> = createReducer(initialState)
    .handleAction(getRoot.success, (state: RootState, action: { type: string; payload: GetRootSuccessResult }) => ({
        ...state,
        ...action.payload,
        error: undefined,
    }))
    .handleAction(getRoot.failure, (state: RootState, action: { type: string; payload: Error }) => ({
        ...state,
        error: action.payload,
    }));
// .handleAction(getPersons.success, (state: RootState, action: { type: string; payload: Person }) => ({
//     ...state,
//     persons: [...state.persons, action.payload],
//     error: undefined,
// }))
export default persistReducer(
    {
        key: 'root',
        storage,
    },
    rootReducer
);

export const getRootLinks = createSelector(
    (state: AppState): RootLinks | undefined => state.root.links,
    (rootLinks: RootLinks | undefined): RootLinks | undefined => rootLinks
);
export const getError = createSelector(
    (state: AppState): Error | undefined => state.root.error,
    (error: Error | undefined): Error | undefined => error
);
