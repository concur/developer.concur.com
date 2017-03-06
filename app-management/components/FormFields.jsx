/*
 * Wrapper components to render SkyForm fields with validation errors
 */

import React, { PropTypes } from 'react';
import Select from 'react-select';
import { Field } from 'redux-form';

export const FieldError = ({ error, ariaText }) => (
  <span id={ariaText} className="help-block">{error}</span>
);

FieldError.propTypes = {
  error: PropTypes.any,
  ariaText: PropTypes.string,
};

FieldError.defaultProps = {
  error: null,
  ariaText: '',
};

export const FieldHelp = ({ children }) => (
  <p>
    <small>
      <i className="fa fa-question-circle" />&nbsp;
      {children}
    </small>
  </p>
);

FieldHelp.propTypes = {
  children: PropTypes.any.isRequired,
};

export const InputField = ({ input, type, label, placeholder, meta: { touched, error } }) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <input
        {...input}
        id={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
        aria-describedby={ariaText}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

InputField.defaultProps = {
  placeholder: '',
};

export const TextareaField = ({ input, label, placeholder, meta: { touched, error } }) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <textarea
        {...input}
        id={name}
        placeholder={placeholder}
        className="form-control"
        aria-describedby={ariaText}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

TextareaField.defaultProps = {
  placeholder: '',
};

export const SelectField = ({ input, label, placeholder, options, meta: { touched, error } }) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>{label}</label>
      <Select
        {...input}
        id={name}
        placeholder={placeholder}
        options={options}
        onBlur={() => input.onBlur(input.value)}
        aria-describedby={ariaText}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

SelectField.defaultProps = {
  placeholder: '',
};

export const MultiselectField = ({
  input,
  label,
  placeholder,
  options,
  meta: { touched, error },
}) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>{label}</label>
      <Select
        {...input}
        id={name}
        multi
        placeholder={placeholder}
        options={options}
        clearable={false}
        onBlur={() => input.onBlur(input.value)}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

MultiselectField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

MultiselectField.defaultProps = {
  placeholder: '',
};

// Due to the checkbox being wrapped by a label, this component doesn't use FieldWrapper
export const CheckboxField = ({ input, meta: { touched, error }, children }) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>
        <input {...input} id={name} type="checkbox" aria-describedby={ariaText} />
        <i />&nbsp;
        {children}
      </label>
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

CheckboxField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export const RedirectUriField = ({
  input,
  label,
  placeholder,
  canDelete,
  onClick,
  meta: { touched, error },
}) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <div className={canDelete ? 'input-group' : ''}>
        <input
          {...input}
          id={name}
          type="url"
          placeholder={placeholder}
          className="form-control"
          aria-describedby={ariaText}
        />
        {canDelete ? (
          <div className="input-group-addon uri-delete" onClick={onClick} title="Delete">
            <i className="fa fa-times-circle" />
          </div>
        ) : null}
      </div>
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

RedirectUriField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  canDelete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
};

RedirectUriField.defaultProps = {
  label: '',
  placeholder: '',
};

export const RedirectUris = ({ fields }) => (
  <div className="redirect-uris">
    {fields.map((uri, idx) => (
      <Field
        key={idx}
        component={RedirectUriField}
        name={uri}
        label={idx === 0 ? 'Redirect URI' : null}
        placeholder="https://example-uri.com"
        canDelete={fields.length > 1}
        onClick={() => fields.remove(idx)}
      />
    ))}
    <a
      className="btn small dark-green uri-add"
      onClick={() => fields.push('')}
    >
      Add URI
    </a>
  </div>
);

RedirectUris.propTypes = {
  fields: PropTypes.object.isRequired,
};
