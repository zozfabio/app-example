import { connect } from 'react-redux';
import { AppState } from '../../../../app/store/types';
import { getError, getRootLinks } from '../../../../modules/Main/store';
import { StateProps } from './types';
import Menu from './Menu';

const mapStateToProps = (state: AppState): StateProps => ({
    rootLinks: getRootLinks(state),
    error: getError(state),
});

export default connect(mapStateToProps)(Menu);
