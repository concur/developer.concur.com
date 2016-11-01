export const LOGIN_HANDLE_INPUT_CHANGE = 'LOGIN_HANDLE_INPUT_CHANGE';

export function handleInputChange(fieldName, newValue) {
  return {
    type: LOGIN_HANDLE_INPUT_CHANGE,
    fieldName,
    newValue,
  };
}
