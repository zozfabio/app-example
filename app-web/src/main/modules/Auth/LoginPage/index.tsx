import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../app/store/types';
import { LoginInput } from '../../../services/auth/types';
import { getError } from '../store';
import { login } from '../store/actions';
import { DispatchProps, StateProps } from './types';
import LoginPage from './LoginPage';

const mapStateToProps = (state: AppState): StateProps => ({
    error: getError(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    login: (input: LoginInput) => dispatch(login.request(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
