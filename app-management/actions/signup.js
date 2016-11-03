/* eslint-env browser */

import { reset } from 'redux-form';
import { hashHistory } from 'react-router';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

export function signupFailure(message) {
  return {
    type: SIGNUP_FAILURE,
    message,
  };
}

export function signupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    token,
  };
}

export function postSignup(values) {
  return function thunk(dispatch) {
    dispatch(signupRequest());

    const options = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    window.fetch(`${process.env.API_SERVER}/auth/signup`, options)
      .then(response => response.json())
      .then(() => {
        dispatch(signupSuccess());
        hashHistory.push('/login');
        dispatch(reset('signup'));
      })
      .catch(err => dispatch(signupFailure(err.message)));
  };
}
