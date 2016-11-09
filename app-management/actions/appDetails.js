import 'es6-promise';
import fetch from 'isomorphic-fetch';

export const APP_DETAILS_REQUEST = 'APP_DETAILS_REQUEST';
export const APP_DETAILS_FAILURE = 'APP_DETAILS_FAILURE';
export const APP_DETAILS_SUCCESS = 'APP_DETAILS_SUCCESS';
export const APP_DETAILS_TOKEN_SUCCESS = 'APP_DETAILS_TOKEN_SUCCESS';
export const APP_DETAILS_UPDATE_SUCCESS = 'APP_DETAILS_UPDATE_SUCCESS';

export function appDetailsRequest() {
  return {
    type: APP_DETAILS_REQUEST,
  };
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

export function appDetailsTokenSuccess(refreshToken) {
  return {
    type: APP_DETAILS_TOKEN_SUCCESS,
    refreshToken,
  };
}

export function appDetailsUpdateSuccess() {
  return {
    type: APP_DETAILS_UPDATE_SUCCESS,
  };
}

export function fetchAppDetails(id) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const token = getState().auth.token;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.API_SERVER}/apps/${id}`, options)
      .then(response => response.json())
      .then(app => dispatch(appDetailsSuccess(app)))
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}

export function updateAppDetails(app) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const token = getState().auth.token;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.API_SERVER}/apps/${app.id}`, options)
      .then(response => response.json())
      .then(() => {
        dispatch(appDetailsUpdateSuccess());
        dispatch(fetchAppDetails(app.id));
      })
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}

export function generateAppSecret(id) {
  return (dispatch, getState) => {
    dispatch(appDetailsRequest());

    const token = getState().auth.token;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.API_SERVER}/apps/${id}/refreshToken`, options)
      .then(response => response.json())
      .then(data => dispatch(appDetailsTokenSuccess(data.token)))
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}
