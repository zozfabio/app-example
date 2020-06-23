import { createAction, createAsyncAction } from 'typesafe-actions';
import { Error } from '../../../services/types';
import { LoginSuccessResult } from './types';
import { LoginInput } from '../../../services/auth/types';

export const login = createAsyncAction(
    '@auth/LOGIN',
    '@auth/LOGIN_SUCCESS',
    '@auth/LOGIN_FAILURE',
    '@auth/LOGIN_CANCEL'
)<LoginInput, LoginSuccessResult, Error, string>();

export const logout = createAction('@auth/LOGOUT')();
