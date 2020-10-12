import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../../app/store/types';
import { LayoutState } from '../../../Layout/store/types';
import { getMaximized } from '../../../Layout/store';
import { setMaximized } from '../../../Layout/store/actions';
import { DispatchProps } from './types';
import MenuToggle from './MenuToggle';

const mapStateToProps = (state: AppState): Pick<LayoutState, 'maximized'> => ({
    maximized: getMaximized(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setMaximized: (maximized: boolean) => dispatch(setMaximized(maximized)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggle);
