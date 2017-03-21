import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';
import { generateAppSecret } from '../../actions/generateAppSecret';

export function mapStateToProps(state) {
  return {
    appDetails: state.appDetails,
    appSecret: state.appSecret,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    generateSecretHandler: id => dispatch(generateAppSecret(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
