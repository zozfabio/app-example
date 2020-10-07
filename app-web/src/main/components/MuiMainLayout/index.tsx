import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../app/store/types';
import { getMaximized } from '../LayoutConfigurer/store';
import { LayoutState } from '../LayoutConfigurer/store/types';
import { setMaximized } from '../LayoutConfigurer/store/actions';
import { DispatchProps } from './Sider/types';
import MainLayout from './MainLayout';

const mapStateToProps = (state: AppState): Pick<LayoutState, 'maximized'> => ({
    maximized: getMaximized(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setMaximized: (maximized: boolean) => dispatch(setMaximized(maximized)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
