import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { formValidator } from '../../utils/formValidator';
import { InputField, SelectField, CheckboxField } from '../FormFields';

import countries from '../../data/countries.json';
import concurRelationships from '../../data/concurRelationships.json';

const constraints = {
  firstName: {
    presence: { message: 'is required' },
  },
  lastName: {
    presence: { message: 'is required' },
  },
  company: {
    presence: { message: 'is required' },
  },
  email: {
    presence: { message: 'is required' },
    email: true,
  },
  password: {
    presence: { message: 'is required' },
    length: { minimum: 8 },
  },
  passwordVerify: {
    presence: { message: 'is required' },
    equality: {
      attribute: 'password',
      message: 'must match password',
    },
  },
  country: {
    presence: { message: 'is required' },
  },
  website: {
    url: true,
  },
  termsOfUseAgreement: {
    presence: { message: 'is required' },
    inclusion: {
      within: [true],
      message: 'is required',
    },
  },
};

const SignupForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>&#42; required field</p>
    <fieldset>
      <div className="row">
        <section className="col-md-12">
          <Field
            component={InputField}
            type="text"
            name="firstName"
            label="First Name &#42;"
            placeholder="First Name"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="text"
            name="lastName"
            label="Last Name &#42;"
            placeholder="Last Name"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="email"
            name="email"
            label="Email Address &#42;"
            placeholder="john.smith@example.com"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="text"
            name="company"
            label="Company Name &#42;"
            placeholder="Company Name"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="password"
            name="password"
            label="Password (8 characters minimum) &#42;"
            placeholder="Password"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="password"
            name="passwordVerify"
            label="Password Verify &#42;"
            placeholder="Password Verify"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="text"
            name="businessDescription"
            label="Business Description"
            placeholder="Description"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="tel"
            name="phoneNumber"
            label="Phone Number"
            placeholder="+1-555-555-5555"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={SelectField}
            name="country"
            label="Country &#42;"
            placeholder="Select country"
            options={countries}
            simpleValue
          />
        </section>
        <section className="col-md-12">
          <Field
            component={InputField}
            type="url"
            name="website"
            label="Website"
            placeholder="http://example.com"
          />
        </section>
        <section className="col-md-12">
          <Field
            component={SelectField}
            name="relationshipToConcur"
            label="Relationship with Concur"
            placeholder="Select relationship"
            options={concurRelationships}
            simpleValue
          />
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
      <button type="submit" className="btn bright-blue">Sign Up</button>
    </footer>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'signup',
  validate: formValidator(constraints),
})(SignupForm);
