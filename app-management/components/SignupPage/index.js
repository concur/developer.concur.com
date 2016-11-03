import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import { postSignup } from '../../actions/signup';

function mapStateToProps(state) {
  return state.signup;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => {
      dispatch(postSignup(values));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);
