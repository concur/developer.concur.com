import { reset } from 'redux-form';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export function newUserRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

export function newUserFailure(message) {
  return {
    type: SIGNUP_FAILURE,
    message,
  };
}

export function newUserSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    token,
  };
}

export function postNewUser(values) {
  return function thunk(dispatch) {
    dispatch(newUserRequest());
    dispatch(newUserSuccess());
    dispatch(reset('signup'));
  };
}
