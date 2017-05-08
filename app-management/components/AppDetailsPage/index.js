/* eslint-env browser */

import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';
import { appChangeFailure, generateAppSecret, putApp } from '../../actions/appChange';
import { sharedHelpers } from '../../utils/actionHelpers';

export function mapStateToProps(state) {
  return {
    appChange: state.appChange,
    appDetails: state.appDetails,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    generateSecretHandler: (id, appName) => {
      const confirmPrompt = window.prompt('Type the name of your app to confirm clientSecret regeneration. This CANNOT be undone.');

      if (confirmPrompt === appName) {
        dispatch(generateAppSecret(id));
      } else {
        dispatch(appChangeFailure('Application names do not match.'));
      }
    },
    putAppHandler: (app, appName) => {
      const confirmPrompt = window.prompt('Type the original name of your app to confirm update. This will regenerate your clientSecret, which CANNOT be undone.');

      if (confirmPrompt === appName) {
        const composedApp = sharedHelpers.composeApp(app);
        dispatch(putApp(composedApp));
      } else {
        dispatch(appChangeFailure('Application names do not match.'));
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
