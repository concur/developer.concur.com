/*
 * Wrapper components to render SkyForm fields with validation errors
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';

// Wrap each render component with a label and Skyform classes needed for errors
const FieldWrapper = ({ name, label, touched, error, classNames, children }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? `${classNames} state-error` : classNames}>
      {children}
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error.join(', ')}</em>}
  </div>
);

FieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.array,
  classNames: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export const renderInput = ({ input, name, type, label, meta: { touched, error } }) => (
  <FieldWrapper name={name} label={label} touched={touched} error={error} classNames="input">
    <input {...input} id={name} type={type} />
  </FieldWrapper>
);

renderInput.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderTextarea = ({ input, name, label, meta: { touched, error } }) => (
  <FieldWrapper name={name} label={label} touched={touched} error={error} classNames="textarea">
    <textarea {...input} id={name} />
  </FieldWrapper>
);

renderTextarea.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderSelect = ({ input, name, label, options, meta: { touched, error } }) => (
  <FieldWrapper name={name} label={label} touched={touched} error={error}>
    <Select
      {...input}
      id={name}
      options={options}
      onBlur={() => input.onBlur(input.value)}
    />
  </FieldWrapper>
);

renderSelect.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderMultiSelect = ({ input, name, label, options, meta: { touched, error } }) => (
  <FieldWrapper name={name} label={label} touched={touched} error={error}>
    <Select
      {...input}
      id={name}
      multi
      options={options}
      onBlur={() => input.onBlur(input.value)}
    />
  </FieldWrapper>
);

renderMultiSelect.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

// Due to the checkbox being wrapped by a label, this component doesn't use FieldWrapper
export const renderCheckbox = ({ input, name, type, meta: { touched, error }, children }) => (
  <div>
    <label className={touched && error ? 'checkbox state-error' : 'checkbox'} htmlFor={name}>
      <input {...input} id={name} type={type} />
      <i />
      {children}
    </label>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

renderCheckbox.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.any,
};
