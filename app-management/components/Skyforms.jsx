/*
 * Wrapper components to render SkyForm fields with validation errors
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';
import { Field } from 'redux-form';

// Wrap each render component with a label and Skyform classes needed for errors
export const FieldWrapper = ({ label, name, touched, error, classNames, children }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? `${classNames} state-error` : classNames}>
      {children}
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.any,
  classNames: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export const renderInput = ({ input, type, label, meta: { touched, error }, children }) => (
  <FieldWrapper name={input.name} label={label} touched={touched} error={error} classNames="input">
    <input {...input} id={input.name} type={type} />
    {children}
  </FieldWrapper>
);

renderInput.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export const renderTextarea = ({ input, label, meta: { touched, error } }) => (
  <FieldWrapper
    name={input.name}
    label={label}
    touched={touched}
    error={error}
    classNames="textarea"
  >
    <textarea {...input} id={input.name} />
  </FieldWrapper>
);

renderTextarea.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderSelect = ({ input, label, options, meta: { touched, error } }) => (
  <FieldWrapper name={input.name} label={label} touched={touched} error={error}>
    <Select
      {...input}
      id={input.name}
      options={options}
      onBlur={() => input.onBlur(input.value)}
    />
  </FieldWrapper>
);

renderSelect.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderMultiSelect = ({ input, label, options, meta: { touched, error } }) => (
  <FieldWrapper name={input.name} label={label} touched={touched} error={error}>
    <Select
      {...input}
      id={input.name}
      multi
      options={options}
      onBlur={() => input.onBlur(input.value)}
    />
  </FieldWrapper>
);

renderMultiSelect.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

// Due to the checkbox being wrapped by a label, this component doesn't use FieldWrapper
export const renderCheckbox = ({ input, type, meta: { touched, error }, children }) => (
  <div>
    <label className={touched && error ? 'checkbox state-error' : 'checkbox'} htmlFor={input.name}>
      <input {...input} id={input.name} type={type} />
      <i />
      {children}
    </label>
    {touched && error && <em htmlFor={input.name} className="invalid">{error}</em>}
  </div>
);

renderCheckbox.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export const renderUris = ({ fields }) => (
  <div>
    {fields.map((uri, idx) =>
      <div key={idx}>
        <Field
          component={renderInput}
          type="url"
          name={uri}
          label={idx === 0 ? 'Redirect URI' : null}
          placeholder="Redirect URI"
        >
          {idx ? (
            <i
              className="icon-append fa fa-minus-circle"
              onClick={() => fields.remove(idx)}
            />
          ) : null}
        </Field>
      </div>
    )}
    <div className="add-uri">
      <button type="button" className="btn bright-blue pull-right" onClick={() => fields.push('')}>Add URI</button>
    </div>
  </div>
);

renderUris.propTypes = {
  fields: PropTypes.object,
};
