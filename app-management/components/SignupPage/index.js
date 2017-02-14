import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import { postSignup } from '../../actions/signup';

export function mapStateToProps(state) {
  return state.signup;
}

export function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: user => dispatch(postSignup(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupPage);
