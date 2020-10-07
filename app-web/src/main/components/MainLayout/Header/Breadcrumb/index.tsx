import { connect } from 'react-redux';
import { AppState } from '../../../../app/store/types';
import { LayoutState } from '../../../LayoutConfigurer/store/types';
import { getBreadcrumb } from '../../../LayoutConfigurer/store';
import Breadcrumb from './Breadcrumb';

const mapStateToProps = (state: AppState): Pick<LayoutState, 'breadcrumb'> => ({
    breadcrumb: getBreadcrumb(state),
});

export default connect(mapStateToProps)(Breadcrumb);
