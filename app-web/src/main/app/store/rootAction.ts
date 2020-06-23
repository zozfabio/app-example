import { ActionType } from 'typesafe-actions';
import * as authActions from '../../modules/Auth/store/actions';
import * as mainActions from '../../modules/Main/store/actions';

const rootAction = {
    auth: authActions,
    main: mainActions,
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
