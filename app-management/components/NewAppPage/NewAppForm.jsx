import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import grants from '../../data/grants.json';
import scopes from '../../data/scopes.json';

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
            <label className="label" htmlFor="appName">App Name &#42;</label>
            <div className="input">
              <Field
                component="input"
                type="text"
                name="appName"
                id="appName"
                placeholder="App Name"
              />
            </div>
          </section>
          <section className="col col-6">
            <label className="label" htmlFor="appDescription">App Description &#42;</label>
            <div className="textarea">
              <Field
                component="textarea"
                name="appDescription"
                id="appDescription"
                placeholder="App Description"
              />
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col col-6">
            <label className="label" htmlFor="appType">Application Type &#42;</label>
            <div className="select">
              <Field
                component="select"
                name="appType"
                id="appType"
              >
                <option value="" defaultValue />
                <option value="business">Business</option>
                <option value="consumer">Consumer</option>
              </Field>
              <i />
            </div>
          </section>
          <section className="col col-6">
            <label className="label" htmlFor="redirectUrl">Redirect URL &#42;</label>
            <div className="input">
              <Field
                component="input"
                type="url"
                name="redirectUrl"
                id="redirectUrl"
                placeholder="Redirect URL"
              />
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col col-6">
            <label className="label" htmlFor="allowedGrants">Allowed Grants &#42;</label>
            <div className="select select-multiple">
              <Field
                component="select"
                type="select-multiple"
                name="allowedGrants"
                id="allowedGrants"
                multiple
              >
                {grantOptions}
              </Field>
            </div>
          </section>
          <section className="col col-6">
            <label className="label" htmlFor="allowedScopes">Allowed Scopes &#42;</label>
            <div className="select select-multiple">
              <Field
                component="select"
                type="select-multiple"
                name="allowedScopes"
                id="allowedScopes"
                multiple
              >
                {scopeOptions}
              </Field>
            </div>
          </section>
        </div>
        <section>
          <label className="checkbox" htmlFor="termsOfUseAgreement">
            <Field
              component="input"
              type="checkbox"
              name="termsOfUseAgreement"
              id="termsOfUseAgreement"
            />
            <i />
            I Agree to the <a href="/Terms-of-Use.html" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="https://www.concur.com/en-us/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </label>
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
})(NewAppForm);
