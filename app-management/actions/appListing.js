/* eslint-env browser */

export const APP_LISTING_REQUEST = 'APP_LISTING_REQUEST';
export const APP_LISTING_FAILURE = 'APP_LISTING_FAILURE';
export const APP_LISTING_SUCCESS = 'APP_LISTING_SUCCESS';

export function appListingRequest() {
  return {
    type: APP_LISTING_REQUEST,
  };
}

export function appListingFailure(message) {
  return {
    type: APP_LISTING_FAILURE,
    message,
  };
}

export function appListingSuccess(apps) {
  return {
    type: APP_LISTING_SUCCESS,
    apps,
  };
}

export function fetchAppListing() {
  return function thunk(dispatch, getState) {
    dispatch(appListingRequest());

    const token = getState().auth.token;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    window.fetch(`${process.env.API_SERVER}/apps`, options)
      .then(response => response.json())
      .then(apps => dispatch(appListingSuccess(apps)))
      .catch(err => dispatch(appListingFailure(err.message)));
  };
}
