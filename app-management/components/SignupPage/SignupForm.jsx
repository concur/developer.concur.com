import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { formValidator } from '../../utils/formValidator';
import { renderInput } from '../Skyforms';

const constraints = {
  firstName: {
    presence: { message: 'is required' },
  },
  lastName: {
    presence: { message: 'is required' },
  },
  username: {
    presence: { message: 'is required' },
  },
  email: {
    presence: { message: 'is required' },
    email: true,
  },
  password: {
    presence: { message: 'is required' },
    length: { minimum: 8 },
  },
  passwordConfirm: {
    presence: { message: 'is required' },
    equality: {
      attribute: 'password',
      message: 'must match password',
    },
  },
};

const SignupForm = props => (
  <form className="sky-form" onSubmit={props.handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderInput}
            type="text"
            name="firstName"
            label="First Name &#42;"
            placeholder="First Name"
          />
        </section>
        <section className="col col-6">
          <Field
            component={renderInput}
            type="text"
            name="lastName"
            label="Last Name &#42;"
            placeholder="Last Name"
          />
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderInput}
            type="text"
            name="username"
            label="Username &#42;"
            placeholder="Username"
          />
        </section>
        <section className="col col-6">
          <Field
            component={renderInput}
            type="email"
            name="email"
            label="Email Address &#42;"
            placeholder="Email Address"
          />
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderInput}
            type="password"
            name="password"
            label="Password &#42;"
            placeholder="Password"
          />
        </section>
        <section className="col col-6">
          <Field
            component={renderInput}
            type="password"
            name="passwordConfirm"
            label="Confirm Password &#42;"
            placeholder="Confirm Password"
          />
        </section>
      </div>
      <p>&#42; required field</p>
    </fieldset>
    <footer>
      <button type="submit" className="button">Sign Up</button>
    </footer>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signup',
  validate: formValidator(constraints),
})(SignupForm);
