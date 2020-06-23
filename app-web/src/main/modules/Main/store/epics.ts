import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActionsObservable, Epic, StateObservable } from 'redux-observable';
import { AppState } from '../../../app/store/types';
import { RootAction } from '../../../app/store/rootAction';
import { RootService } from '../../../app/store/rootService';
import { getRoot } from './actions';
import { GetRootSuccessResult } from './types';

export const getRootEpic: Epic<RootAction, RootAction, AppState, RootService> = (
    action$: ActionsObservable<RootAction>,
    state$: StateObservable<AppState>,
    { main }
) =>
    action$.pipe(
        filter(isActionOf(getRoot.request)),
        switchMap(() =>
            from(main.getRootJson()).pipe(
                map(
                    data =>
                        ({
                            links: data._links,
                        } as GetRootSuccessResult)
                ),
                map(getRoot.success),
                catchError((error: AjaxError) => of(getRoot.failure({ message: error.message }))),
                takeUntil(action$.pipe(filter(isActionOf(getRoot.cancel))))
            )
        )
    );

// export const getPersonsEpic: Epic<RootAction, RootAction, AppState, RootService> = (
//     action$: ActionsObservable<RootAction>,
//     state$: StateObservable<AppState>,
//     { main }
// ) =>
//     action$.pipe(
//         filter(isActionOf(getPersons.request)),
//         switchMap(() =>
//             from(main.getTestJson()).pipe(
//                 map(getPersons.success),
//                 // catchError((error: string) => of(getPersons.failure({ message: error }))),
//                 takeUntil(action$.pipe(filter(isActionOf(getPersons.cancel))))
//             )
//         )
//     );
