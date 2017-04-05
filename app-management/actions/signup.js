import 'es6-promise';
import fetch from 'isomorphic-fetch';
import { reset } from 'redux-form';
import { hashHistory } from 'react-router';
import { signupHelpers } from '../utils/actionHelpers';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export function signupRequest() {
  return { type: SIGNUP_REQUEST };
}

export function signupFailure(message) {
  return {
    type: SIGNUP_FAILURE,
    message,
  };
}

export function signupSuccess() {
  return { type: SIGNUP_SUCCESS };
}

export function postSignup(user) {
  return (dispatch) => {
    dispatch(signupRequest());

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/register`, options)
      .then(response => response.text())
      .then(signupHelpers.isDuplicateLogin)
      .then(signupHelpers.isCriticalError)
      .then(signupHelpers.isSuccessful)
      .then(() => {
        dispatch(signupSuccess());
        hashHistory.push('/login');
        dispatch(reset('signup'));
      })
      .catch(err => dispatch(signupFailure(err.message)));
  };
}
