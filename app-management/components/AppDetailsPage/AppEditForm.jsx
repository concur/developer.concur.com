import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { formValidator } from '../../utils/formValidator';
import { renderInput, renderTextarea, renderCheckbox, renderSelect, renderMultiSelect, renderUris } from '../Skyforms';
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

const EditAppForm = ({ handleSubmit, generateSecret, initialValues, showSecret }) => (
  <form className="sky-form" onSubmit={handleSubmit}>
    <fieldset>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderCheckbox}
            type="checkbox"
            name="enabled"
          >
            Enabled
          </Field>
        </section>
        <section className="col col-6">
          <AppSecret
            clickHandler={() => generateSecret(initialValues.id)}
            secret={initialValues.secret}
            collapsed={showSecret}
          />
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderInput}
            type="text"
            name="name"
            label="App Name"
            placeholder="App Name"
          />
        </section>
        <section className="col col-6">
          <Field
            component={renderTextarea}
            name="description"
            label="App Description"
            placeholder="App Description"
          />
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderSelect}
            name="appType"
            label="Application Type"
            placeholder="Application Type"
            options={applicationTypes}
            simpleValue
          />
        </section>
        <section className="col col-6">
          <FieldArray component={renderUris} name="redirectUris" />
        </section>
      </div>
      <div className="row">
        <section className="col col-6">
          <Field
            component={renderMultiSelect}
            type="select-multiple"
            name="allowedGrants"
            label="Allowed Grants"
            options={grants}
            simpleValue
          />
        </section>
        <section className="col col-6">
          <Field
            component={renderMultiSelect}
            type="select-multiple"
            name="allowedScopes"
            label="Allowed Scopes"
            options={scopes}
            simpleValue
          />
        </section>
      </div>
    </fieldset>
    <footer>
      <button
        type="submit"
        className="btn bright-blue pull-right"
        disabled={initialValues.certified}
      >
        Update
      </button>
      <Link to="/" className="btn grey pull-right">Cancel</Link>
    </footer>
  </form>
);

EditAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  generateSecret: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  showSecret: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'editApp',
  validate: formValidator(constraints),
})(EditAppForm);
