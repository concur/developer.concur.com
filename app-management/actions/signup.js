export const SIGNUP_HANDLE_INPUT_CHANGE = 'SIGNUP_HANDLE_INPUT_CHANGE';

export function handleInputChange(fieldName, newValue) {
  return {
    type: SIGNUP_HANDLE_INPUT_CHANGE,
    fieldName,
    newValue,
  };
}
