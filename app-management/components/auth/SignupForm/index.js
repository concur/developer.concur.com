import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { handleInputChange } from '../../../actions/signup';

function mapStateToProps(state) {
  return state.signupForm;
}

function mapDispatchToProps(dispatch) {
  return {
    handleInputChange: e => dispatch(handleInputChange(e.target.name, e.target.value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
