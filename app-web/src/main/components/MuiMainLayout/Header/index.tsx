import { connect } from 'react-redux';
import { AppState } from '../../../app/store/types';
import { getMaximized } from '../../LayoutConfigurer/store';
import { LayoutState } from '../../LayoutConfigurer/store/types';
import Header from './Header';

const mapStateToProps = (state: AppState): Pick<LayoutState, 'maximized'> => ({
    maximized: getMaximized(state),
});

export default connect(mapStateToProps)(Header);
