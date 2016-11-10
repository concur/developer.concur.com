import validate from 'validate.js';

validate.validators.firstElementRequired = (obj) => {
  const message = obj && obj[0] ? undefined : 'are required';
  return message;
};

validate.validators.validateUrlArray = (urls, options) => {
  if (Array.isArray(urls) && !validate.validators.firstElementRequired(urls)) {
    return urls.map(url => validate.validators.url(url, options));
  }
  return undefined;
};

export default function formValidator(constraints) {
  return values => validate(values, constraints) || {};
}
