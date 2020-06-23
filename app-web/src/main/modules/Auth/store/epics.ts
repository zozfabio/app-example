import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { AppState } from '../../../app/store/types';
import { RootAction } from '../../../app/store/rootAction';
import { RootService } from '../../../app/store/rootService';
import { login } from './actions';
import { LoginSuccessResult } from './types';
import { readAccessToken, readRefreshToken } from '../../../services/auth/helpers';

export const loginEpic: Epic<RootAction, RootAction, AppState, RootService> = (
    action$: ActionsObservable<RootAction>,
    state$: StateObservable<AppState>,
    { auth }
) =>
    action$.pipe(
        filter(isActionOf(login.request)),
        switchMap(action =>
            from(auth.login(action.payload)).pipe(
                map(data => {
                    const accessToken = readAccessToken(data.accessToken);
                    const refreshToken = readRefreshToken(data.refreshToken);
                    if (accessToken && refreshToken) {
                        return {
                            rawAccessToken: data.accessToken,
                            accessToken,
                            refreshToken,
                            user: {
                                fullname: accessToken.fln,
                                profiles: accessToken.prf,
                            },
                        } as LoginSuccessResult;
                    }
                    throw new Error('Error reading token!');
                }),
                map(login.success),
                catchError((message: string) => of(login.failure({ message }))),
                takeUntil(action$.pipe(filter(isActionOf(login.cancel))))
            )
        )
    );
