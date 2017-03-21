import { connect } from 'react-redux';
import NewAppSuccessPage from './NewAppSuccessPage';

export function mapStateToProps(state) {
  return state.newApp;
}

export default connect(
  mapStateToProps,
  null,
)(NewAppSuccessPage);
