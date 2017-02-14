import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import { formValidator } from '../../utils/formValidator';
import {
  InputField,
  TextareaField,
  CheckboxField,
  SelectField,
  MultiselectField,
  RedirectUris,
  FieldHelp,
} from '../FormFields';

// All selectable grants and scopes
import grants from '../../data/grants.json';
import scopes from '../../data/scopes.json';
import applicationTypes from '../../data/applicationTypes.json';

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
  redirectUris: {
    validateUrlArray: {
      allowLocal: true,
    },
    firstElementRequired: true,
  },
  allowedGrants: {
    presence: { message: '- at least one is required.' },
  },
  allowedScopes: {
    presence: { message: '- at least one is required.' },
  },
  termsOfUseAgreement: {
    inclusion: {
      within: [true],
      message: 'is required',
    },
  },
};

const NewAppForm = ({ handleSubmit, reset }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col-md-6">
          <Field
            component={InputField}
            type="text"
            name="appName"
            label="App Name &#42;"
            placeholder="App Name"
          />
        </section>
        <section className="col-md-6">
          <Field
            component={TextareaField}
            name="appDescription"
            label="App Description &#42;"
            placeholder="App Description"
          />
        </section>
      </div>
      <div className="row">
        <section className="col-md-6">
          <Field
            component={SelectField}
            name="appType"
            label="App Type &#42;"
            placeholder="App Type"
            options={applicationTypes}
          />
        </section>
        <section className="col-md-6">
          <FieldArray component={RedirectUris} name="redirectUris" />
        </section>
      </div>
      <div className="row">
        <section className="col-md-6">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedGrants"
            label="Allowed Grants &#42;"
            options={grants}
          />
          <FieldHelp>
            <a
              href="/api-reference/authentication/apidoc.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Authentication Grant documentation
            </a>
          </FieldHelp>
        </section>
        <section className="col-md-6">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedScopes"
            label="Allowed Scopes &#42;"
            options={scopes}
          />
          <FieldHelp>
            <a
              href="/api-reference/authentication/scopes.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scope documentation
            </a>
          </FieldHelp>
        </section>
      </div>
      <section>
        <Field
          component={CheckboxField}
          name="termsOfUseAgreement"
        >
          I Agree to the <a href="/Terms-of-Use.html" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="https://www.concur.com/en-us/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </Field>
      </section>
      <p>&#42; required field</p>
    </fieldset>
    <footer>
      <button type="submit" className="btn bright-blue pull-right">Submit</button>
      <button type="button" className="btn grey pull-right" onClick={reset}>Reset</button>
    </footer>
  </form>
);

NewAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'newApp',
  validate: formValidator(constraints),
  initialValues: {
    redirectUris: [''],
  },
})(NewAppForm);
