import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails, updateAppDetails } from '../../actions/appDetails';

export function mapStateToProps(state) {
  return state.appDetails;
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    handleSubmit: app => dispatch(updateAppDetails(app)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
