import { catchError } from 'rxjs/operators';
import { ActionsObservable, combineEpics, Epic, StateObservable } from 'redux-observable';
import { loginEpic } from '../../modules/Auth/store/epics';
import { getRootEpic } from '../../modules/Main/store/epics';
import { AppState } from './types';
import { RootAction } from './rootAction';
import { RootService } from './rootService';

const rootEpic: Epic<RootAction, RootAction, AppState, RootService> = (
    action$: ActionsObservable<RootAction>,
    store$: StateObservable<AppState>,
    dependencies: RootService
) =>
    combineEpics(loginEpic, getRootEpic)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export default rootEpic;
