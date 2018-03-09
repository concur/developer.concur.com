/*
 * Wrapper components to render SkyForm fields with validation errors
 */

import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Field } from 'redux-form';

export const FieldError = ({ ariaText, error }) => (
  <span id={ariaText} className="help-block">{error}</span>
);

FieldError.propTypes = {
  ariaText: PropTypes.string,
  error: PropTypes.any,
};

FieldError.defaultProps = {
  ariaText: '',
  error: null,
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

export const InputField = ({
  disabled, input, label, meta: { touched, error }, placeholder, type,
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <input
        {...input}
        aria-describedby={ariaText}
        className="form-control"
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

InputField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  disabled: false,
  placeholder: '',
};

export const TextareaField = ({
  disabled, input, label, meta: { touched, error }, placeholder,
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <textarea
        {...input}
        aria-describedby={ariaText}
        className="form-control"
        disabled={disabled}
        id={name}
        placeholder={placeholder}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

TextareaField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

TextareaField.defaultProps = {
  disabled: false,
  placeholder: '',
};

export const SelectField = ({
  disabled, input, label, meta: { touched, error }, options, placeholder,
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>{label}</label>
      <Select
        {...input}
        aria-describedby={ariaText}
        disabled={disabled}
        id={name}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        placeholder={placeholder}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

SelectField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

SelectField.defaultProps = {
  disabled: false,
  placeholder: '',
};

export const MultiselectField = ({
  disabled,
  input,
  label,
  meta: { touched, error },
  options,
  placeholder,
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>{label}</label>
      <Select
        {...input}
        clearable={false}
        disabled={disabled}
        id={name}
        multi
        onBlur={() => input.onBlur(input.value)}
        options={options}
        placeholder={placeholder}
      />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

MultiselectField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

MultiselectField.defaultProps = {
  disabled: false,
  placeholder: '',
};

// Due to the checkbox being wrapped by a label, this component doesn't use FieldWrapper
export const CheckboxField = ({
  children, disabled, input, meta: { touched, error },
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name}>
        <input
          {...input}
          aria-describedby={ariaText}
          disabled={disabled}
          id={name}
          type="checkbox"
        />
        <i />&nbsp;
        {children}
      </label>
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

CheckboxField.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

CheckboxField.defaultProps = {
  disabled: false,
};

export const RedirectUriField = ({
  canDelete,
  disabled,
  input,
  label,
  meta: { touched, error },
  onClick,
  placeholder,
}) => {
  const { name } = input;
  const ariaText = `${name}-help`;
  const errorClass = touched && error ? 'has-error' : '';

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <div className={canDelete && !disabled ? 'input-group' : ''}>
        <input
          {...input}
          aria-describedby={ariaText}
          className="form-control"
          disabled={disabled}
          id={name}
          placeholder={placeholder}
          type="url"
        />
        {canDelete && !disabled ? (
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
  canDelete: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

RedirectUriField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
};

export const RedirectUris = ({ disabled, fields }) => (
  <div className="redirect-uris">
    {fields.map((uri, idx) => (
      <Field
        canDelete={fields.length > 1}
        component={RedirectUriField}
        disabled={disabled}
        key={idx}
        label={idx === 0 ? 'Redirect URI' : null}
        name={uri}
        onClick={() => fields.remove(idx)}
        placeholder="https://example-uri.com"
      />
    ))}
    {!disabled ? (
      <a
        className="btn small dark-green uri-add"
        onClick={() => fields.push('')}
      >
        Add URI
      </a>
    ) : null}
  </div>
);

RedirectUris.propTypes = {
  disabled: PropTypes.bool,
  fields: PropTypes.object.isRequired,
};

RedirectUris.defaultProps = {
  disabled: false,
};
