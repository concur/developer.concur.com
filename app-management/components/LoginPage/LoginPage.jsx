import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const LoginPage = ({ handleSubmit, isFetching, error }) => (
  <div className="row">
    <div className="col-md-6">
      <h2>Log in to App Management</h2>
      <p>
        <a href="https://www.concursolutions.com/profile/send_password_hint.asp" target="_blank" rel="noopener noreferrer">
          Forgot Password
        </a>
      </p>
      <hr />
      <ErrorAlert error={error} />
      <LoadingSpinner loading={isFetching} />
      <LoginForm onSubmit={handleSubmit} />
    </div>
  </div>
);

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginPage;
