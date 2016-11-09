/* eslint-env browser */

import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';

function mapStateToProps(state) {
  return state.appDetails;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    handleSubmit: values => console.log(values),
    generateSecret: () => {
      const confirmation = window.confirm('Are you sure? This will clear your previous app secret.');
      if (confirmation) {
        console.log('generated');
      }
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
