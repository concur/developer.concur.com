import React, { PropTypes } from 'react';

class SignupForm extends React.Component {
  static submitHandler(e) {
    e.preventDefault();
  }

  render () {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordConfirm,
      handleInputChange } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Signup</h2>
          <form
            className="sky-form"
            method="POST"
            action={`${process.env.API_SERVER}/signup`}
            onSubmit={this.submitHandler}
          >
            <fieldset>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="firstName">First Name</label>
                  <div className="input">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="lastName">Last Name</label>
                  <div className="input">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </section>
              </div>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="username">Username</label>
                  <div className="input">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="password">Email Address</label>
                  <div className="input">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </div>
                </section>
              </div>
              <div className="row">
                <section className="col col-6">
                  <label className="label" htmlFor="password">Password</label>
                  <div className="input">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                </section>
                <section className="col col-6">
                  <label className="label" htmlFor="passwordConfirm">Confirm Password</label>
                  <div className="input">
                    <input
                      type="password"
                      name="passwordConfirm"
                      id="passwordConfirm"
                      placeholder="Confirm Password"
                      value={passwordConfirm}
                      onChange={handleInputChange}
                    />
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

SignupForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
};

export default SignupForm;
