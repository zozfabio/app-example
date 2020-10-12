import { connect } from 'react-redux';
import { AppState } from '../store/types';
import { getRawAccessToken } from '../../modules/Auth/store';
import { StateProps } from './types';
import ServicesConfigurator from './ServicesConfigurator';

const mapStateToProps = (state: AppState): StateProps => ({
    accessToken: getRawAccessToken(state),
});

export default connect(mapStateToProps)(ServicesConfigurator);
