import { applyMiddleware, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import { AppState } from './types';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import { RootAction } from './rootAction';
import rootService, { RootService } from './rootService';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, AppState, RootService>({
    dependencies: rootService,
});

const store: Store<AppState> = createStore(rootReducer, applyMiddleware(epicMiddleware));

export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export default store;
