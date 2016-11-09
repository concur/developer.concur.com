import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { login } from '../../actions/auth';

function mapStateToProps(state) {
  return state.auth;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: user => dispatch(login(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
