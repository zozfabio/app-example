import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../store/actions';
import { DispatchProps } from './types';
import LogoutHandler from './LogoutHandler';

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    logout: () => dispatch(logout()),
});

export default connect(() => ({}), mapDispatchToProps)(LogoutHandler);
