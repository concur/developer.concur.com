import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import {
  InputField,
  TextareaField,
  MultiselectField,
  RedirectUris,
} from '../FormFields';
import { formValidator } from '../../utils/formValidator';

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
  LegacyId: {
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
};

const EditAppForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col-md-8">
          <hr />
          <h3>App Details</h3>
        </section>
        <section className="col-md-8">
          <Field
            component={InputField}
            type="text"
            name="name"
            label="App Name"
            placeholder="App Name"
          />
        </section>
        <section className="col-md-8">
          <Field
            component={TextareaField}
            name="description"
            label="App Description"
            placeholder="App Description"
          />
        </section>
        <section className="col-md-8">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="appType"
            label="App Type"
            options={appTypes}
            simpleValue
          />
        </section>
        <section className="col-md-8">
          <Field
            component={InputField}
            type="text"
            name="legacyId"
            label="Legacy Id &#42;"
            placeholder="Legacy Id"
          />
        </section>
        <section className="col-md-8">
          <FieldArray component={RedirectUris} name="redirectUris" />
        </section>
        <section className="col-md-8">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedGrants"
            label="Allowed Grants"
            options={grants}
            simpleValue
          />
        </section>
        <section className="col-md-8">
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
      <footer>
        <button type="submit" className="btn bright-blue">Update</button>
      </footer>
    </fieldset>
  </form>
);

EditAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'editApp',
  validate: formValidator(constraints),
})(EditAppForm);
