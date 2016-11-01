import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'validate.js';

import { renderInput, renderTextarea, renderCheckbox, renderSelect, renderMultiSelect } from '../Skyforms';

// All selectable grants and scopes
import grants from '../../data/grants.json';
import scopes from '../../data/scopes.json';

const constraints = {
  appName: {
    presence: { message: 'is required' },
    length: {
      minimum: 3,
      maximum: 99,
    },
  },
  appDescription: {
    presence: { message: 'is required' },
    length: {
      minimum: 10,
      maximum: 4999,
    },
  },
  appType: {
    presence: { message: 'is required' },
  },
  redirectUrl: {
    presence: { message: 'is required' },
    url: true,
  },
  allowedGrants: {
    presence: { message: '- at least one is required.' },
  },
  allowedScopes: {
    presence: { message: '- at least one is required.' },
  },
  termsOfUseAgreement: {
    presence: { message: 'is required' },
  },
};

const formValidator = values => validate(values, constraints) || {};

const NewAppForm = (props) => {
  const grantOptions = grants.map((grant, idx) => {
    const { title, value } = grant;
    return <option key={idx} value={value}>{title}</option>;
  });
  const scopeOptions = scopes.map((scope, idx) => {
    const { title, value } = scope;
    return <option key={idx} value={value}>{title}</option>;
  });

  return (
    <form className="sky-form" onSubmit={props.handleSubmit}>
      <fieldset>
        <div className="row">
          <section className="col col-6">
            <Field
              component={renderInput}
              type="text"
              name="appName"
              label="App Name &#42;"
              placeholder="App Name"
            />
          </section>
          <section className="col col-6">
            <Field
              component={renderTextarea}
              name="appDescription"
              label="App Description &#42;"
              placeholder="App Description"
            />
          </section>
        </div>
        <div className="row">
          <section className="col col-6">
            <Field
              component={renderSelect}
              name="appType"
              label="Application Type &#42;"
              placeholder="Application Type"
            >
              <option value="" defaultValue />
              <option value="business">Business</option>
              <option value="consumer">Consumer</option>
            </Field>
          </section>
          <section className="col col-6">
            <Field
              component={renderInput}
              type="url"
              name="redirectUrl"
              label="Redirect URL &#42;"
              placeholder="Redirect URL"
            />
          </section>
        </div>
        <div className="row">
          <section className="col col-6">
            <Field
              component={renderMultiSelect}
              type="select-multiple"
              name="allowedGrants"
              label="Allowed Grants &#42;"
            >
              {grantOptions}
            </Field>
          </section>
          <section className="col col-6">
            <Field
              component={renderMultiSelect}
              type="select-multiple"
              name="allowedScopes"
              label="Allowed Scopes &#42;"
            >
              {scopeOptions}
            </Field>
          </section>
        </div>
        <section>
          <Field
            component={renderCheckbox}
            type="checkbox"
            name="termsOfUseAgreement"
          >
            I Agree to the <a href="/Terms-of-Use.html" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="https://www.concur.com/en-us/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </Field>
        </section>
        <p>&#42; required field</p>
      </fieldset>
      <footer>
        <button type="submit" className="button">Submit</button>
      </footer>
    </form>
  );
};

NewAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'newApp',
  validate: formValidator,
})(NewAppForm);
