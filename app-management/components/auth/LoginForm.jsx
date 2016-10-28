import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2>Login to App Management</h2>
          <p>Don&#39;t have an account? <Link to="/signup">Sign Up here</Link></p>
          <form
            action="{{ site.data.forms.server }}/apps"
            method="POST"
            id="appCreation"
            className="sky-form"
          >
            <fieldset>
              <div className="row">
                <section>
                  <label className="label" htmlFor="username">Username</label>
                  <div className="input">
                    <input type="text" name="username" id="username" placeholder="Username" />
                  </div>
                </section>
              </div>
              <div className="row">
                <section>
                  <label className="label" htmlFor="password">Password</label>
                  <div className="input" htmlFor="password">
                    <input type="password" name="password" id="password" placeholder="Password" />
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
