import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import { formValidator } from '../../utils/formValidator';
import {
  InputField,
  TextareaField,
  CheckboxField,
  MultiselectField,
  RedirectUris,
  FieldHelp,
} from '../FormFields';

// All selectable grants and scopes
import grants from '../../data/grants.json';
import scopes from '../../data/scopes.json';
import appTypes from '../../data/appTypes.json';

const constraints = {
  name: {
    presence: { message: 'is required' },
    length: {
      minimum: 3,
      maximum: 99,
    },
  },
  description: {
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
    firstElementRequired: false,
  },
  allowedGrants: {
    presence: { message: '- at least one is required.' },
  },
  allowedScopes: {
    presence: { message: '- at least one is required.' },
  },
  termsOfUseAgreement: {
    presence: { message: 'is required' },
    inclusion: {
      within: [true],
      message: 'is required',
    },
  },
};

const defaultGrants = [grants.find(grant => grant.value === 'refresh_token')];
const defaultScopes = [scopes.find(scope => scope.value === 'openid')];
const defaultUris = [''];

const NewAppForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>&#42; required field</p>
    <fieldset>
      <div className="row">
        <section className="col-md-8">
          <Field
            component={InputField}
            type="text"
            name="name"
            label="App Name &#42;"
            placeholder="App Name"
          />
        </section>
        <section className="col-md-8">
          <Field
            component={TextareaField}
            name="description"
            label="App Description &#42;"
            placeholder="App Description"
          />
        </section>
        <section className="col-md-8">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="appType"
            label="App Type &#42;"
            options={appTypes}
          />
        </section>
        <section className="col-md-8">
          <FieldArray component={RedirectUris} name="redirectUris" />
          <FieldHelp>
            Valid redirect URIs that can be used for the Authorization Code grant type.
            <a
              href="https://tools.ietf.org/html/rfc6749#section-4.1"
              target="_blank"
              rel="noopener noreferrer"
            > See RFC6749
            </a>
          </FieldHelp>
        </section>
        <section className="col-md-8">
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
        <section className="col-md-8">
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
    </fieldset>
    <footer>
      <button type="submit" className="btn bright-blue">Submit</button>
    </footer>
  </form>
);

NewAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'newApp',
  validate: formValidator(constraints),
  initialValues: {
    redirectUris: defaultUris,
    allowedGrants: defaultGrants,
    allowedScopes: defaultScopes,
  },
})(NewAppForm);
