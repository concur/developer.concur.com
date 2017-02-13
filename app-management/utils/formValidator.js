import validate from 'validate.js';

export function firstElementRequired(array) {
  const message = array && array[0] ? undefined : 'are required';
  return message;
};

export function validateUrlArray(urls, options) {
  if (Array.isArray(urls) && !validate.validators.firstElementRequired(urls)) {
    return urls.map(url => validate.validators.url(url, options));
  }
  return undefined;
};

validate.validators.firstElementRequired = firstElementRequired;
validate.validators.validateUrlArray = validateUrlArray;

export function formValidator(constraints) {
  return values => validate(values, constraints) || {};
};
