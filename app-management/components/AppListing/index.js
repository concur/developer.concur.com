import { connect } from 'react-redux';
import AppListing from './AppListing';
import { fetchAppListing } from '../../actions/appListing';

export function mapStateToProps(state) {
  return state.appListing;
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchAppListing: () => dispatch(fetchAppListing()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppListing);
