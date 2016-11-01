import { connect } from 'react-redux';
import Nav from './Nav';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.authenticated,
  };
}

export default connect(
  mapStateToProps
)(Nav);
