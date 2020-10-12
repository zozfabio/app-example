import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LayoutBreadcrumb } from './store/types';
import { setBreadcrumb } from './store/actions';
import { DispatchProps } from './types';
import Layout from './Layout';

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    setBreadcrumb: (breadcrumb: LayoutBreadcrumb[]) => dispatch(setBreadcrumb(breadcrumb)),
});

export default connect(() => ({}), mapDispatchToProps)(Layout);
