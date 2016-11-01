/* eslint-env browser */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = props => (
  <div className="row">
    <div className="col-md-6">
      <h2>Login to App Management</h2>
      <p>Don&#39;t have an account? <Link to="/signup">Sign Up here</Link></p>
      <form
        className="sky-form"
        method="POST"
        action={`${process.env.API_SERVER}/login`}
        onSubmit={props.fetchToken}
      >
        <fieldset>
          <div className="row">
            <section>
              <label className="label" htmlFor="username">Username</label>
              <div className="input">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={props.username}
                  onChange={props.handleInputChange}
                />
              </div>
            </section>
          </div>
          <div className="row">
            <section>
              <label className="label" htmlFor="password">Password</label>
              <div className="input" htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={props.password}
                  onChange={props.handleInputChange}
                />
              </div>
            </section>
          </div>
        </fieldset>
        <footer>
          <button type="submit" className="button">Sign In</button>
        </footer>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {
  fetchToken: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
};

export default LoginForm;
