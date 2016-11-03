import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import formValidator from '../../utils/formValidator';
import { renderInput } from '../Skyforms';

const constraints = {
  username: {
    presence: { message: 'is needed to login' },
  },
  password: {
    presence: { message: 'is needed to login' },
  },
};

const LoginForm = props => (
  <form className="sky-form" onSubmit={props.handleSubmit}>
    <fieldset>
      <div className="row">
        <section>
          <Field
            component={renderInput}
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
          />
        </section>
      </div>
      <div className="row">
        <section>
          <Field
            component={renderInput}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />
        </section>
      </div>
    </fieldset>
    <footer>
      <button type="submit" className="button">Log in</button>
    </footer>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  validate: formValidator(constraints),
})(LoginForm);
