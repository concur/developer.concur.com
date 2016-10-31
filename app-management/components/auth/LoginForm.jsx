/* eslint-env browser */

import React from 'react';
import { Link, hashHistory } from 'react-router';

import auth from '../../utils/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();

    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    window.fetch(`${process.env.API_SERVER}/auth/login`, options)
      .then(response => response.json())
      .then((data) => {
        if (data && data.access_token) {
          auth.setToken(data.access_token);
          hashHistory.push('/');
        }
      });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Login to App Management</h2>
          <p>Don&#39;t have an account? <Link to="/signup">Sign Up here</Link></p>
          <form
            className="sky-form"
            method="POST"
            action={`${process.env.API_SERVER}/login`}
            onSubmit={this.submitHandler}
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
                      onChange={this.handleInputChange}
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
                      onChange={this.handleInputChange}
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
  }
}

export default LoginForm;
