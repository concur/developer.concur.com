import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LoginForm from './LoginForm';

const LoginPage = props => (
  <div className="row">
    <div className="col-md-6">
      <h2>Log in to App Management</h2>
      <p>Don&#39;t have an account? <Link to="/signup">Sign Up here</Link></p>
      <LoginForm onSubmit={props.handleSubmit} />
    </div>
  </div>
);

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginPage;
