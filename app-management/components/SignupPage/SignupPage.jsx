import React, { PropTypes } from 'react';
import SignupForm from './SignupForm';

const SignupPage = props => (
  <div className="row">
    <div className="col-md-12">
      <h2>Signup</h2>
      <SignupForm onSubmit={props.handleSubmit} />
    </div>
  </div>
);

SignupPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupPage;
