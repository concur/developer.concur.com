/* eslint-env browser */

import { hashHistory } from 'react-router';
import { login } from './auth';

export const LOGIN_HANDLE_INPUT_CHANGE = 'LOGIN_HANDLE_INPUT_CHANGE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function handleInputChange(fieldName, newValue) {
  return {
    type: LOGIN_HANDLE_INPUT_CHANGE,
    fieldName,
    newValue,
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    message,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function fetchToken() {
  return function thunk(dispatch, getState) {
    dispatch(loginRequest());

    const { username, password } = getState().loginForm;
    const options = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    window.fetch(`${process.env.API_SERVER}/auth/login`, options)
      .then(response => response.json())
      .then((data) => {
        if (data && data.access_token) {
          dispatch(login(data.access_token));
          dispatch(loginSuccess());
          hashHistory.push('/');
        } else {
          dispatch(loginFailure('No token provided'));
        }
      })
      .catch(err => dispatch(loginFailure(err.message)));
  };
}
