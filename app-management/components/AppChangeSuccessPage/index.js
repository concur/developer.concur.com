import { connect } from 'react-redux';
import AppChangeSuccessPage from './AppChangeSuccessPage';

export function mapStateToProps(state) {
  return state.appChange;
}

export default connect(
  mapStateToProps,
  null,
)(AppChangeSuccessPage);
