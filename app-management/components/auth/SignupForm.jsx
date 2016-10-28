import React from 'react';

class SignupForm extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Signup</h2>
          <form
            action="{{ site.data.forms.server }}/apps"
            method="POST"
            id="appCreation"
            className="sky-form"
          >
            <fieldset>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="firstName">First Name</label>
                  <div className="input">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="lastName">Last Name</label>
                  <div className="input">
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                  </div>
                </section>
              </div>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="username">Username</label>
                  <div className="input">
                    <input type="text" name="username" id="username" placeholder="Username" />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="password">Email Address</label>
                  <div className="input">
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                  </div>
                </section>
              </div>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="password">Password</label>
                  <div className="input">
                    <input type="password" name="password" id="password" placeholder="Password" />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="passwordConfirm">Confirm Password</label>
                  <div className="input">
                    <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" />
                  </div>
                </section>
              </div>
            </fieldset>
            <footer>
              <button type="submit" className="button">Sign Up</button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
