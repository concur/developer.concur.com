import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import { postSignup } from '../../actions/signup';

function mapStateToProps(state) {
  return state.signup;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: user => dispatch(postSignup(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
