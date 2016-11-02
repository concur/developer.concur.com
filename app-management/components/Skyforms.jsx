/*
 * Wrapper components to render SkyForm fields with validation errors
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';

export const renderInput = ({ input, name, type, label, meta: { touched, error } }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? 'input state-error' : 'input'}>
      <input {...input} id={name} type={type} />
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

renderInput.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

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

export const renderTextarea = ({ input, name, label, meta: { touched, error } }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? 'textarea state-error' : 'textarea'}>
      <textarea {...input} id={name} />
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

renderTextarea.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderSelect = ({ input, name, label, options, meta: { touched, error } }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? 'state-error' : ''}>
      <Select
        {...input}
        id={name}
        options={options}
        onBlur={() => input.onBlur(input.value)}
      />
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

renderSelect.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderMultiSelect = ({ input, name, label, options, meta: { touched, error } }) => (
  <div>
    <label className="label" htmlFor={name}>{label}</label>
    <div className={touched && error ? 'state-error' : ''}>
      <Select
        {...input}
        id={name}
        multi
        options={options}
        onBlur={() => input.onBlur(input.value)}
      />
    </div>
    {touched && error && <em htmlFor={name} className="invalid">{error}</em>}
  </div>
);

renderMultiSelect.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};
