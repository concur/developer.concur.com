import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const SignupForm = props => (
  <form className="sky-form" onSubmit={props.handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col col-6">
          <label className="label" htmlFor="firstName">First Name</label>
          <div className="input">
            <Field
              component="input"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
        </section>
        <section className="col col-6">
          <label className="label" htmlFor="lastName">Last Name</label>
          <div className="input">
            <Field
              component="input"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <label className="label" htmlFor="username">Username</label>
          <div className="input">
            <Field
              component="input"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </div>
        </section>
        <section className="col col-6">
          <label className="label" htmlFor="password">Email Address</label>
          <div className="input">
            <Field
              component="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <label className="label" htmlFor="password">Password</label>
          <div className="input">
            <Field
              component="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </section>
        <section className="col col-6">
          <label className="label" htmlFor="passwordConfirm">Confirm Password</label>
          <div className="input">
            <Field
              component="input"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
            />
          </div>
        </section>
      </div>
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
})(SignupForm);
