import React, { PropTypes } from 'react';
import SignupForm from './SignupForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const SignupPage = ({ handleSubmit, isFetching, error }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>Signup</h2>
      <LoadingSpinner loading={isFetching} />
      <ErrorAlert error={error} />
      <SignupForm onSubmit={handleSubmit} />
    </div>
  </div>
);

SignupPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};

export default SignupPage;
