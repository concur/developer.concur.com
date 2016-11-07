/* eslint-env browser */

import { reset } from 'redux-form';

export const NEW_APP_REQUEST = 'NEW_APP_REQUEST';
export const NEW_APP_FAILURE = 'NEW_APP_FAILURE';
export const NEW_APP_SUCCESS = 'NEW_APP_SUCCESS';

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

export function newAppSuccess(app) {
  return {
    type: NEW_APP_SUCCESS,
    app,
  };
}

export function postNewApp() {
  return (dispatch, getState) => {
    dispatch(newAppRequest());

    const state = getState();

    const data = state.newApp;
    const token = state.auth.token;
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    window.fetch(`${process.env.API_SERVER}/apps`, options)
      .then(response => response.json())
      .then(app => dispatch(newAppSuccess(app)))
      .catch(err => dispatch(newAppFailure(err.message)));
    dispatch(reset('newApp'));
  };
}
