import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../../actions/auth';
import { handleInputChange } from '../../../actions/login';

function mapStateToProps(state) {
  return state.loginForm;
}

function mapDispatchToProps(dispatch) {
  return {
    login: token => dispatch(login(token)),
    handleInputChange: e => dispatch(handleInputChange(e.target.name, e.target.value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
