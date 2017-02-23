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
} from '../FormFields';
import AppSecret from './AppSecret';

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
    presence: { message: 'is required' },
  },
};

const EditAppForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col-md-12">
          <AppSecret
            clickHandler={() => console.log('TODO: Implement')}
          />
        </section>
        <section className="col-md-12">
          <Field
            component={CheckboxField}
            type="checkbox"
            name="enabled"
          >
            Enabled
          </Field>
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="text"
            name="name"
            label="App Name"
            placeholder="App Name"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={TextareaField}
            name="description"
            label="App Description"
            placeholder="App Description"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={SelectField}
            name="appType"
            label="Application Type"
            placeholder="Application Type"
            options={applicationTypes}
            simpleValue
          />
        </section>
        <section className="col-md-12">
          <FieldArray component={RedirectUris} name="redirectUris" />
        </section>
        <section className="col-md-12">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedGrants"
            label="Allowed Grants"
            options={grants}
            simpleValue
          />
        </section>
        <section className="col-md-12">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedScopes"
            label="Allowed Scopes"
            options={scopes}
            simpleValue
          />
        </section>
      </div>
    </fieldset>
    {/*
    <footer>
      <button
        type="submit"
        className="btn bright-blue"
        disabled={initialValues.certified}
      >
        Update
      </button>
    </footer>
    */}
  </form>
);

EditAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'editApp',
  validate: formValidator(constraints),
})(EditAppForm);
