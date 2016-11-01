/* eslint-env browser */

export const NEW_APP_HANDLE_INPUT_CHANGE = 'NEW_APP_HANDLE_INPUT_CHANGE';
export const NEW_APP_HANDLE_CHECKBOX_CHANGE = 'NEW_APP_HANDLE_CHECKBOX_CHANGE';
export const NEW_APP_HANDLE_MULTIPLE_SELECT_CHANGE = 'NEW_APP_HANDLE_MULTIPLE_SELECT_CHANGE';
export const NEW_APP_VALIDATE = 'NEW_APP_VALIDATE';
export const NEW_APP_REQUEST = 'NEW_APP_REQUEST';
export const NEW_APP_FAILURE = 'NEW_APP_FAILURE';
export const NEW_APP_SUCCESS = 'NEW_APP_SUCCESS';

export function handleInputChange(fieldName, newValue) {
  return {
    type: NEW_APP_HANDLE_INPUT_CHANGE,
    fieldName,
    newValue,
  };
}

export function handleCheckboxChange(fieldName) {
  return {
    type: NEW_APP_HANDLE_CHECKBOX_CHANGE,
    fieldName,
  };
}

export function handleMultipleSelectChange(fieldName, options) {
  return {
    type: NEW_APP_HANDLE_MULTIPLE_SELECT_CHANGE,
    fieldName,
    options,
  };
}

export function validate() {
  return {
    type: NEW_APP_VALIDATE,
  };
}

export function newAppRequest() {
  return {
    type: NEW_APP_REQUEST,
  };
}

export function newAppFailure(message) {
  return {
    type: NEW_APP_FAILURE,
    message,
  };
}

export function newAppSuccess(apps) {
  return {
    type: NEW_APP_SUCCESS,
    apps,
  };
}

export function postNewApp() {
  return function thunk(dispatch) {
    dispatch(newAppRequest());

    // const data = getState().newAppForm;
    // const token = getState().auth.token;
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    // window.fetch(`${process.env.API_SERVER}/apps`, options)
    //   .then(response => response.json())
    //   .then(apps => dispatch(newAppSuccess()))
    //   .catch(err => dispatch(newAppFailure(err.message)));
    dispatch(newAppSuccess());
  };
}
