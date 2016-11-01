import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';

function mapStateToProps(state) {
  return state.appDetails;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
