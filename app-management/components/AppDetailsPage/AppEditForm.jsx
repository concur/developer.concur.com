import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import {
  InputField,
  TextareaField,
  MultiselectField,
  RedirectUris,
} from '../FormFields';

// All selectable grants and scopes
import grants from '../../data/grants.json';
import scopes from '../../data/scopes.json';
import appTypes from '../../data/appTypes.json';

const EditAppForm = () => (
  <form>
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
            disabled
          />
        </section>
        <section className="col-md-8">
          <Field
            component={TextareaField}
            name="description"
            label="App Description"
            placeholder="App Description"
            disabled
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
            disabled
          />
        </section>
        <section className="col-md-8">
          <FieldArray component={RedirectUris} name="redirectUris" disabled />
        </section>
        <section className="col-md-8">
          <Field
            component={MultiselectField}
            type="select-multiple"
            name="allowedGrants"
            label="Allowed Grants"
            options={grants}
            simpleValue
            disabled
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
            disabled
          />
        </section>
      </div>
    </fieldset>
  </form>
);

export default reduxForm({
  form: 'editApp',
})(EditAppForm);
