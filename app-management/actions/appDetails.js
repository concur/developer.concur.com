import 'es6-promise';
import fetch from 'isomorphic-fetch';

import { sharedHelpers } from '../utils/actionHelpers';

export const APP_DETAILS_REQUEST = 'APP_DETAILS_REQUEST';
export const APP_DETAILS_FAILURE = 'APP_DETAILS_FAILURE';
export const APP_DETAILS_SUCCESS = 'APP_DETAILS_SUCCESS';
export const GENERATE_SECRET_SUCCESS = 'GENERATE_SECRET_SUCCESS';

export function appDetailsRequest() {
  return { type: APP_DETAILS_REQUEST };
}

export function appDetailsFailure(message) {
  return {
    type: APP_DETAILS_FAILURE,
    message,
  };
}

export function appDetailsSuccess(app) {
  return {
    type: APP_DETAILS_SUCCESS,
    app,
  };
}

export function generateSecretSuccess(clientSecret) {
  return {
    type: GENERATE_SECRET_SUCCESS,
    clientSecret,
  };
}

export function fetchAppDetails(id) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const { token } = getState().auth;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications/${id}`, options)
      .then(sharedHelpers.validResponse)
      .then(response => response.json())
      .then(app => dispatch(appDetailsSuccess(app)))
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}

export function generateAppSecret(id) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const { token } = getState().auth;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications/${id}/secret`, options)
      .then(sharedHelpers.validResponse)
      .then(response => response.json())
      .then(({ clientSecret }) => {
        dispatch(generateSecretSuccess(clientSecret));
      })
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}
