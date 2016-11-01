import { connect } from 'react-redux';
import SignupPage from './SignupPage';
import { postNewUser } from '../../actions/signup';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (values) => {
      dispatch(postNewUser(values));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
