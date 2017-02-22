import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SignupForm from './SignupForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const SignupPage = ({ handleSubmit, isFetching, error }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>Sign Up</h2>
      <LoadingSpinner
        loading={isFetching}
        message="Creating account... (this may take several seconds)"
      />
      <ErrorAlert error={error} />
      <div className="alert alert-info">
        <p>
          Application Management requires a
          <strong> Concur Travel and Expense (CTE) account. </strong>
          If you have a CTE account, <Link to="/login">login here.</Link>
        </p>
        <p>Otherwise, sign up for an account using the form below.</p>
      </div>
      <SignupForm onSubmit={handleSubmit} />
    </div>
  </div>
);

SignupPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default SignupPage;
