import 'es6-promise';
import fetch from 'isomorphic-fetch';

import { sharedHelpers } from '../utils/actionHelpers';

export const GENERATE_APP_SECRET_REQUEST = 'GENERATE_APP_SECRET_REQUEST';
export const GENERATE_APP_SECRET_FAILURE = 'GENERATE_APP_SECRET_FAILURE';
export const GENERATE_APP_SECRET_SUCCESS = 'GENERATE_APP_SECRET_SUCCESS';
export const CLEAR_APP_SECRET = 'CLEAR_APP_SECRET';

export function generateAppSecretRequest() {
  return { type: GENERATE_APP_SECRET_REQUEST };
}

export function generateAppSecretFailure(message) {
  return {
    type: GENERATE_APP_SECRET_FAILURE,
    message,
  };
}

export function generateAppSecretSuccess(app, clientSecret) {
  return {
    type: GENERATE_APP_SECRET_SUCCESS,
    app,
    clientSecret,
  };
}

export function clearAppSecret() {
  return { type: CLEAR_APP_SECRET };
}

export function generateAppSecret(appId) {
  return (dispatch, getState) => {
    dispatch(generateAppSecretRequest());

    const { token } = getState().auth;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: '',
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications/${appId}/secret`, options)
      .then(sharedHelpers.validResponse(dispatch))
      .then(response => response.json())
      .then(({ application: app, clientSecret }) => {
        dispatch(generateAppSecretSuccess(app, clientSecret));
      })
      .catch(err => dispatch(generateAppSecretFailure(err.message)));
  };
}
