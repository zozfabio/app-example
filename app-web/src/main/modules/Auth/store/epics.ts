import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { AppState } from '../../../app/store/types';
import { RootAction } from '../../../app/store/rootAction';
import { RootService } from '../../../app/store/rootService';
import { login } from './actions';
import { AjaxError } from 'rxjs/ajax';

export const loginEpic: Epic<RootAction, RootAction, AppState, RootService> = (
    action$: ActionsObservable<RootAction>,
    state$: StateObservable<AppState>,
    { auth }
) =>
    action$.pipe(
        filter(isActionOf(login.request)),
        switchMap(action =>
            from(auth.login(action.payload)).pipe(
                map(login.success),
                catchError((error: AjaxError) => of(login.failure(error))),
                takeUntil(action$.pipe(filter(isActionOf(login.cancel))))
            )
        )
    );
