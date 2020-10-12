import { connect } from 'react-redux';
import { AppState } from '../../../../app/store/types';
import { LayoutState } from '../../../Layout/store/types';
import { getBreadcrumb } from '../../../Layout/store';
import Breadcrumb from './Breadcrumb';

const mapStateToProps = (state: AppState): Pick<LayoutState, 'breadcrumb'> => ({
    breadcrumb: getBreadcrumb(state),
});

export default connect(mapStateToProps)(Breadcrumb);
