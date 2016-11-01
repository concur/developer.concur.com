import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { fetchToken } from '../../actions/login';

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: ({ username, password }) => {
      dispatch(fetchToken(username, password));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
