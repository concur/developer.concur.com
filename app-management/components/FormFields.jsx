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
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

export const TextareaField = ({ input, label, meta: { touched, error } }) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <textarea {...input} id={name} className="form-control" aria-describedby={ariaText} />
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

TextareaField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
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
  children: PropTypes.any,
};

export const RedirectUriField = ({
  input,
  label,
  canDelete,
  onClick,
  meta: { touched, error },
}) => {
  const { name } = input;
  const errorClass = touched && error ? 'has-error' : '';
  const buttonClass = canDelete ? 'uri-delete' : 'uri-add';
  const ariaText = `${name}-help`;

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={name} className="control-label">{label}</label>
      <div className="input-group">
        <input
          {...input}
          id={name}
          type="url"
          className="form-control"
          aria-describedby={ariaText}
        />
        <div className={`input-group-addon ${buttonClass}`} onClick={onClick}>
          {canDelete
            ? <i className="fa fa-minus-circle" />
            : <i className="fa fa-plus-circle" />
          }
        </div>
      </div>
      {touched && error && <FieldError error={error} ariaText={ariaText} />}
    </div>
  );
};

RedirectUriField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  canDelete: PropTypes.bool,
  onClick: PropTypes.func,
  meta: PropTypes.object.isRequired,
};

export const RedirectUris = ({ fields }) => (
  <div className="redirect-uris">
    {fields.map((uri, idx) => {
      const isLastElement = (idx === fields.length - 1);
      return (
        <Field
          key={idx}
          component={RedirectUriField}
          name={uri}
          label={idx === 0 ? 'Redirect URI' : null}
          placeholder="Redirect URI"
          canDelete={!isLastElement}
          onClick={isLastElement
                    ? () => fields.push('')
                    : () => fields.remove(idx)
                  }
        />
      );
    })}
  </div>
);

RedirectUris.propTypes = {
  fields: PropTypes.object,
};
