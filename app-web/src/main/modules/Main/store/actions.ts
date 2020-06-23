import { createAsyncAction } from 'typesafe-actions';
import { Error } from '../../../services/types';
import { GetRootSuccessResult } from './types';

export const getRoot = createAsyncAction(
    '@root/GET_ROOT',
    '@root/GET_ROOT_SUCCESS',
    '@root/GET_ROOT_FAILURE',
    '@root/GET_ROOT_CANCEL'
)<void, GetRootSuccessResult, Error>();

// export const getPersons = createAsyncAction(
//     '@root/GET_PERSONS',
//     '@root/GET_PERSONS_SUCCESS',
//     '@root/GET_PERSONS_FAILURE',
//     '@root/GET_PERSONS_CANCEL'
// )<void, Person, Error, void>();
