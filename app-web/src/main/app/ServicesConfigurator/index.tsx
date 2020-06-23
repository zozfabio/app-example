import { connect } from 'react-redux';
import { AppState } from '../store/types';
import { getRawToken } from '../../modules/Auth/store';
import { StateProps } from './types';
import ServicesConfigurator from './ServicesConfigurator';

const mapStateToProps = (state: AppState): StateProps => ({
    accessToken: getRawToken(state),
});

export default connect(mapStateToProps)(ServicesConfigurator);
