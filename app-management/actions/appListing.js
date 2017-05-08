import 'es6-promise';
import fetch from 'isomorphic-fetch';

import { sharedHelpers } from '../utils/actionHelpers';

export const APP_LISTING_REQUEST = 'APP_LISTING_REQUEST';
export const APP_LISTING_FAILURE = 'APP_LISTING_FAILURE';
export const APP_LISTING_SUCCESS = 'APP_LISTING_SUCCESS';
export const APP_LISTING_INVALIDATE_CACHE = 'APP_LISTING_INVALIDATE_CACHE';

export function appListingRequest() {
  return { type: APP_LISTING_REQUEST };
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
  return (dispatch, getState) => {
    dispatch(appListingRequest());

    const {
      appListing: { validCache },
      auth: { token },
    } = getState();

    if (validCache) return null;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    return fetch(`${process.env.DEVCENTER_API_FORMS}/applications`, options)
      .then(sharedHelpers.validResponse(dispatch))
      .then(response => response.json())
      .then(apps => dispatch(appListingSuccess(apps)))
      .catch(err => dispatch(appListingFailure(err.message)));
  };
}
