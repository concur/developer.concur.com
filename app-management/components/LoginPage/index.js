import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { fetchToken } from '../../actions/auth';

function mapStateToProps(state) {
  return state.auth;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: ({ username, password }) => {
      dispatch(fetchToken(username, password));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
