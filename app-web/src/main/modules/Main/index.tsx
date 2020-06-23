import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../app/store/types';
import { isAuthenticated } from '../Auth/store';
import { getRoot } from './store/actions';
import { DispatchProps, StateProps } from './types';
import Main from './Main';

const mapStateToProps = (state: AppState): StateProps => ({
    isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    getRoot: () => dispatch(getRoot.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
