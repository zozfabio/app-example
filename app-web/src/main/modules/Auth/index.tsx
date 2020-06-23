import { connect } from 'react-redux';
import { AppState } from '../../app/store/types';
import { isAuthenticated } from './store';
import { Props } from './types';
import Auth from './Auth';

const mapStateToProps = (state: AppState): Props => ({
    isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Auth);
