import 'es6-promise';
import fetch from 'isomorphic-fetch';
import { reset } from 'redux-form';
import { hashHistory } from 'react-router';

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

export function signupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    token,
  };
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
      mode: 'no-cors',
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/register`, options)
      .then(response => response.json())
      .then((data) => {
        dispatch(signupSuccess(data.access_token));
        hashHistory.push('/login');
        dispatch(reset('signup'));
      })
      .catch(err => dispatch(signupFailure(err.message)));
  };
}
