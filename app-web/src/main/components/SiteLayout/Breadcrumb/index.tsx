import { connect } from 'react-redux';
import { AppState } from '../../../app/store/types';
import { getBreadcrumb } from '../../LayoutConfigurer/store';
import { StateProps } from './types';
import Breadcrumb from './Breadcrumb';

const mapStateToProps = (state: AppState): StateProps => ({
    breadcrumb: getBreadcrumb(state),
});

export default connect(mapStateToProps)(Breadcrumb);
