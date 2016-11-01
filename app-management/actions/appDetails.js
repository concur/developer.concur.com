/* eslint-env browser */

export const APP_DETAILS_REQUEST = 'APP_DETAILS_REQUEST';
export const APP_DETAILS_FAILURE = 'APP_DETAILS_FAILURE';
export const APP_DETAILS_SUCCESS = 'APP_DETAILS_SUCCESS';

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

export function fetchAppDetails(id) {
  return function thunk(dispatch, getState) {
    dispatch(appDetailsRequest());

    const token = getState().auth.token;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    window.fetch(`${process.env.API_SERVER}/apps/${id}`, options)
      .then(response => response.json())
      .then(app => dispatch(appDetailsSuccess(app)))
      .catch(err => dispatch(appDetailsFailure(err.message)));
  };
}
