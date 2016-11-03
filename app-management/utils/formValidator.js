import validate from 'validate.js';

export default function formValidator(constraints) {
  return values => validate(values, constraints) || {};
}
