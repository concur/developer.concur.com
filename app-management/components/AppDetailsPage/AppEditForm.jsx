import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

import formValidator from '../../utils/formValidator';
import { renderInput, renderTextarea, renderSelect, renderMultiSelect } from '../Skyforms';

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

const EditAppForm = props => (
  <form className="sky-form" onSubmit={props.handleSubmit}>
    <fieldset>
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
          <Field
            component={renderInput}
            type="url"
            name="redirectUrl"
            label="Redirect URL"
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
      <Link to="/" className="button">Cancel</Link>
      <button type="submit" className="button">Update</button>
    </footer>
  </form>
);

EditAppForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'editApp',
  validate: formValidator(constraints),
})(EditAppForm);
