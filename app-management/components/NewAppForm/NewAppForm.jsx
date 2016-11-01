import React, { PropTypes } from 'react';

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
    <div className="row">
      <div className="col-md-12">
        <h2>App Creation Form</h2>
        <form
          className="sky-form"
          method="POST"
          action="{{ site.data.forms.server }}/apps"
          onSubmit={props.postNewApp}
        >
          <fieldset>
            <div className="row">
              <section className="col col-6">
                <label className="label" htmlFor="appName">App Name &#42;</label>
                <div className="input">
                  <input
                    type="text"
                    name="appName"
                    id="appName"
                    placeholder="App Name"
                    value={props.appName}
                    onChange={props.handleInputChange}
                  />
                </div>
              </section>
              <section className="col col-6">
                <label className="label" htmlFor="appDescription">App Description &#42;</label>
                <div className="textarea">
                  <textarea
                    name="appDescription"
                    id="appDescription"
                    placeholder="App Description"
                    value={props.appDescription}
                    onChange={props.handleInputChange}
                  />
                </div>
              </section>
            </div>
            <div className="row">
              <section className="col col-6">
                <label className="label" htmlFor="appType">Application Type &#42;</label>
                <div className="select">
                  <select
                    name="appType"
                    id="appType"
                    value={props.appType}
                    onChange={props.handleInputChange}
                  >
                    <option value="" defaultValue />
                    <option value="business">Business</option>
                    <option value="consumer">Consumer</option>
                  </select>
                  <i />
                </div>
              </section>
              <section className="col col-6">
                <label className="label" htmlFor="redirectUrl">Redirect URL &#42;</label>
                <div className="input">
                  <input
                    type="url"
                    name="redirectUrl"
                    id="redirectUrl"
                    placeholder="Redirect URL"
                    value={props.redirectUrl}
                    onChange={props.handleInputChange}
                  />
                </div>
              </section>
            </div>
            <div className="row">
              <section className="col col-6">
                <label className="label" htmlFor="allowedGrants">Allowed Grants &#42;</label>
                <div className="select select-multiple">
                  <select
                    name="allowedGrants"
                    id="allowedGrants"
                    multiple
                    value={props.allowedGrants}
                    onChange={props.handleMultipleSelectChange}
                  >
                    {grantOptions}
                  </select>
                </div>
              </section>
              <section className="col col-6">
                <label className="label" htmlFor="allowedScopes">Allowed Scopes &#42;</label>
                <div className="select select-multiple">
                  <select
                    name="allowedScopes"
                    id="allowedScopes"
                    multiple
                    value={props.allowedScopes}
                    onChange={props.handleMultipleSelectChange}
                  >
                    {scopeOptions}
                  </select>
                </div>
              </section>
            </div>
            <section>
              <label className="checkbox" htmlFor="termsOfUseAgreement">
                <input
                  type="checkbox"
                  name="termsOfUseAgreement"
                  id="termsOfUseAgreement"
                  value={props.termsOfUseAgreement}
                  onChange={props.handleCheckboxChange}
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
      </div>
    </div>
  );
};

NewAppForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleMultipleSelectChange: PropTypes.func.isRequired,
  postNewApp: PropTypes.func.isRequired,
  appName: PropTypes.string.isRequired,
  appDescription: PropTypes.string.isRequired,
  appType: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
  allowedGrants: PropTypes.arrayOf(PropTypes.string).isRequired,
  allowedScopes: PropTypes.arrayOf(PropTypes.string).isRequired,
  termsOfUseAgreement: PropTypes.bool.isRequired,
};

export default NewAppForm;
