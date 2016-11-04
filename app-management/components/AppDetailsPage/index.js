import { connect } from 'react-redux';
import AppDetailsPage from './AppDetailsPage';
import { fetchAppDetails } from '../../actions/appDetails';

function mapStateToProps(state) {
  return {
    ...state.appDetails,
    secretConfirm: 'Are you sure? This will clear your previous app secret.',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAppDetails: id => dispatch(fetchAppDetails(id)),
    handleSubmit: values => console.log(values),
    generateSecret: () => console.log('generated'),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppDetailsPage);
