/* eslint-env browser */

import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';
import { generateAppSecret, generateAppSecretFailure } from '../../actions/generateAppSecret';

export function mapStateToProps(state) {
  return {
    appDetails: state.appDetails,
    appSecret: state.appSecret,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    generateSecretHandler: (id, appName) => {
      const confirmPrompt = window.prompt('Type the name of your application to confirm clientSecret regeneration. This CANNOT be undone.');
      if (confirmPrompt === appName) {
        dispatch(generateAppSecret(id));
      } else {
        dispatch(generateAppSecretFailure('Application names do not match.'));
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
