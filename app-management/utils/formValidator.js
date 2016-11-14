import validate from 'validate.js';

export const firstElementRequired = (array) => {
  const message = array && array[0] ? undefined : 'are required';
  return message;
};

export const validateUrlArray = (urls, options) => {
  if (Array.isArray(urls) && !validate.validators.firstElementRequired(urls)) {
    return urls.map(url => validate.validators.url(url, options));
  }
  return undefined;
};

validate.validators.firstElementRequired = firstElementRequired;
validate.validators.validateUrlArray = validateUrlArray;

export const formValidator = (constraints) => {
  return values => validate(values, constraints) || {};
}
