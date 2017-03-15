import 'es6-promise';
import fetch from 'isomorphic-fetch';

import { clearAppSecret } from '../actions/generateAppSecret';
import { sharedHelpers } from '../utils/actionHelpers';

export const APP_DETAILS_REQUEST = 'APP_DETAILS_REQUEST';
export const APP_DETAILS_FAILURE = 'APP_DETAILS_FAILURE';
export const APP_DETAILS_SUCCESS = 'APP_DETAILS_SUCCESS';

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

export function fetchAppDetails(id) {
  return (dispatch, getState) => {
    dispatch(clearAppSecret());
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
      .then(sharedHelpers.validResponse(dispatch))
      .then(response => response.json())
      .then(app => dispatch(appDetailsSuccess(app)))
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}
