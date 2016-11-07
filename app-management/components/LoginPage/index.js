import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { login } from '../../actions/auth';

function mapStateToProps(state) {
  return state.auth;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: ({ username, password }) => {
      dispatch(login(username, password));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
