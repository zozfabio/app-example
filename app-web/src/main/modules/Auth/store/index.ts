import { Action, createReducer, Reducer } from 'typesafe-actions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Error } from '../../../services/types';
import { AuthState, LoginSuccessResult } from './types';
import { login, logout } from './actions';
import { createSelector } from 'reselect';
import { AppState } from '../../../app/store/types';
import { AccessToken } from '../../../services/auth/types';
import { PayloadAction } from 'typesafe-actions/dist/type-helpers';
import { isTokenExpired } from '../../../services/auth/helpers';

const initialState: AuthState = {
    accessToken: undefined,
    refreshToken: undefined,
    user: undefined,
    error: undefined,
};

const authReducer: Reducer<AuthState, { type: string; payload: AuthState }> = createReducer(initialState)
    .handleAction(login.success, (state: AuthState, action: PayloadAction<string, LoginSuccessResult>) => ({
        ...state,
        ...action.payload,
        error: undefined,
    }))
    .handleAction(login.failure, (state: AuthState, action: PayloadAction<string, Error>) => ({
        ...state,
        error: action.payload,
    }))
    .handleAction(logout, (state: AuthState, action: Action) => ({
        ...initialState,
    }));

export default persistReducer(
    {
        key: 'auth',
        storage,
    },
    authReducer
);

export const isAuthenticated = createSelector(
    (state: AppState): AccessToken | undefined => state.auth.accessToken,
    (accessToken: AccessToken | undefined): boolean => (accessToken ? !isTokenExpired(accessToken) : false)
);
export const getRawToken = createSelector(
    (state: AppState): string | undefined => state.auth.rawAccessToken,
    (accessToken: string | undefined): string | undefined => accessToken
);
export const getError = createSelector(
    (state: AppState): Error | undefined => state.auth.error,
    (error: Error | undefined): Error | undefined => error
);
