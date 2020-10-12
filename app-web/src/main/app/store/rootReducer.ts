import { combineReducers } from 'redux';
import root from '../../modules/Main/store';
import auth from '../../modules/Auth/store';
import layout from '../../components/Layout/store';

const rootReducer = combineReducers({
    root,
    auth,
    layout,
});

export default rootReducer;
