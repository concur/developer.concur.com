import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { handleInputChange, fetchToken } from '../../../actions/login';

function mapStateToProps(state) {
  return state.loginForm;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchToken: (e) => {
      e.preventDefault();
      dispatch(fetchToken());
    },
    handleInputChange: e => dispatch(handleInputChange(
      e.target.name,
      e.target.value
    )),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
