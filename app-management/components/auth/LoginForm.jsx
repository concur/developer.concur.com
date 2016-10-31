import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  submitHandler(e) {
    e.preventDefault();
    console.log('login form submitted', e);
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
