import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => (
  <form className="sky-form" onSubmit={props.handleSubmit}>
    <fieldset>
      <div className="row">
        <section>
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
      </div>
      <div className="row">
        <section>
          <label className="label" htmlFor="password">Password</label>
          <div className="input" htmlFor="password">
            <Field
              component="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </section>
      </div>
    </fieldset>
    <footer>
      <button type="submit" className="button">Sign In</button>
    </footer>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
})(LoginForm);
