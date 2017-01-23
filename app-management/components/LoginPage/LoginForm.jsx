import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { formValidator } from '../../utils/formValidator';
import { InputField } from '../FormFields';

const constraints = {
  username: {
    presence: { message: 'is needed to login' },
  },
  password: {
    presence: { message: 'is needed to login' },
  },
};

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="row">
        <section>
          <Field
            component={InputField}
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
            component={InputField}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          />
        </section>
      </div>
    </fieldset>
    <footer>
      <button type="submit" className="btn bright-blue pull-right">Log in</button>
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
