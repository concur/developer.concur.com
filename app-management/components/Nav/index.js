import { connect } from 'react-redux';
import Nav from './Nav';

function mapStateToProps(state) {
  return {
    authenticated: !!state.auth.token,
  };
}

export default connect(
  mapStateToProps
)(Nav);
