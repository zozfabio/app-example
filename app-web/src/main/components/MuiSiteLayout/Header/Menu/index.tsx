import { connect } from 'react-redux';
import { AppState } from '../../../../app/store/types';
import { isAuthenticated } from '../../../../modules/Auth/store';
import { StateProps } from './types';
import Menu from './Menu';

const mapStateToProps = (state: AppState): StateProps => ({
    isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Menu);
