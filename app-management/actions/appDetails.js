import 'es6-promise';
import fetch from 'isomorphic-fetch';

import { sharedHelpers } from '../utils/actionHelpers';

export const APP_DETAILS_REQUEST = 'APP_DETAILS_REQUEST';
export const APP_DETAILS_FAILURE = 'APP_DETAILS_FAILURE';
export const APP_DETAILS_SUCCESS = 'APP_DETAILS_SUCCESS';
export const APP_DETAILS_UPDATE_SUCCESS = 'APP_DETAILS_UPDATE_SUCCESS';

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

export function appDetailsUpdateSuccess() {
  return { type: APP_DETAILS_UPDATE_SUCCESS };
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

export function updateAppDetails(app) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const { token } = getState().auth;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}`, options)
      .then(response => response.json())
      .then(() => {
        dispatch(appDetailsUpdateSuccess());
        dispatch(fetchAppDetails(app.id));
      })
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}
