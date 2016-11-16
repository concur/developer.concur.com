/* eslint-env browser */

import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails, updateAppDetails, showSecret } from '../../actions/appDetails';

export function mapStateToProps(state) {
  return state.appDetails;
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    handleSubmit: app => dispatch(updateAppDetails(app)),
    generateSecret: (id) => {
      const confirmation = window.confirm('Are you sure? This will clear your previous app secret.');
      if (confirmation) {
        dispatch(showSecret());
        console.log(`TBD: Generate secret for app ${id}`);
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
