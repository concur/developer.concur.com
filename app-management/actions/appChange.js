import 'es6-promise';
import fetch from 'isomorphic-fetch';
import { reset } from 'redux-form';
import { hashHistory } from 'react-router';

import { sharedHelpers } from '../utils/actionHelpers';

export const APP_CHANGE_REQUEST = 'APP_CHANGE_REQUEST';
export const APP_CHANGE_FAILURE = 'APP_CHANGE_FAILURE';
export const APP_CHANGE_SUCCESS = 'APP_CHANGE_SUCCESS';

export function appChangeRequest() {
  return { type: APP_CHANGE_REQUEST };
}

export function appChangeFailure(message) {
  return {
    type: APP_CHANGE_FAILURE,
    message,
  };
}

export function appChangeSuccess(app, clientSecret) {
  return {
    type: APP_CHANGE_SUCCESS,
    app,
    clientSecret,
  };
}

export function postApp(newApp) {
  return (dispatch, getState) => {
    dispatch(appChangeRequest());

    const { token } = getState().auth;
    const options = {
      method: 'POST',
      body: JSON.stringify(newApp),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications`, options)
      .then(sharedHelpers.validResponse(dispatch))
      .then(response => response.json())
      .then(({ application: app, clientSecret }) => {
        dispatch(appChangeSuccess(app, clientSecret));
        hashHistory.push('/success');
        dispatch(reset('newApp'));
      })
      .catch(err => dispatch(appChangeFailure(err.message)));
  };
}

export function putApp(app) {
  return (dispatch, getState) => {
    dispatch(appChangeRequest());

    const { token } = getState().auth;
    const options = {
      method: 'PUT',
      body: JSON.stringify(app),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications/${app.id}`, options)
      .then(sharedHelpers.validResponse(dispatch))
      .then(response => response.json())
      .then(({ application, clientSecret }) => {
        dispatch(appChangeSuccess(application, clientSecret));
        hashHistory.push('/success');
        dispatch(reset('editApp'));
      })
      .catch(err => dispatch(appChangeFailure(err.message)));
  };
}
