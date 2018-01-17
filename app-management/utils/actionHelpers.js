import { hashHistory } from 'react-router';
import { loginFailure, logout } from '../actions/auth';

import grants from '../data/grants.json';
import scopes from '../data/scopes.json';
import appTypes from '../data/appTypes.json';

const SIGNUP_SERVER_ERROR = 'A server error occurred when creating your account. Please try again later.';

/**
 * matchItemToValue - Returns a function that returns whether an object's
 * 'value' key matches the item provided.
 */
const matchItemToValue = (item) => {
  return element => (element.value === item);
};

/**
 * matchElementToLabel - Returns a function that returns the element mapped
 * to an object with 'label' and 'value' keys, used by react-select. The object
 * will be returned from the provided labels array if a matching value exists.
 */
const matchElementToLabel = (labels) => {
  return (element) => {
    const label = labels.find(matchItemToValue(element));
    return label || { label: element, value: element };
  };
};

// Helper functions for signup actions
export const signupHelpers = {
  isSuccessful(responseText) {
    try {
      const { userid, password } = JSON.parse(responseText);
      if (userid && password) return Promise.resolve(responseText);
      throw new Error(SIGNUP_SERVER_ERROR);
    } catch (e) {
      throw new Error(SIGNUP_SERVER_ERROR);
    }
  },
  isDuplicateLogin(responseText) {
    if (responseText.includes('Error (IsDuplicateLoginID)')) {
      throw new Error('That email already exists. Please choose another.');
    }
    return Promise.resolve(responseText);
  },
  isCriticalError(responseText) {
    if (responseText.includes('Error (Critical)')) {
      throw new Error(SIGNUP_SERVER_ERROR);
    }
    return Promise.resolve(responseText);
  },
};

// Helper functions for auth actions
export const authHelpers = {
  isAuthorized(response) {
    if (response.status === 403) {
      throw new Error('Invalid username and/or password');
    }
    return Promise.resolve(response);
  },
  isSuccessful(response) {
    if (response.status !== 200) {
      throw new Error('A server error occurred when logging in. Please try again later.');
    }
    return Promise.resolve(response);
  },
  hasValidToken(data) {
    if (!data || !data.access_token) {
      throw new Error('Invalid username and/or password');
    }
    return Promise.resolve(data);
  },
};

// Shared helper functions
export const sharedHelpers = {
  composeApp({ allowedGrants, allowedScopes, appType, ...applicationData }) {
    return {
      allowedGrants: allowedGrants.map(g => g.value),
      allowedScopes: allowedScopes.map(s => s.value),
      appType: appType.map(t => t.value),
      ...applicationData,
    };
  },
  decomposeApp({ allowedGrants, allowedScopes, appType, ...applicationData }) {
    return {
      allowedGrants: allowedGrants.map(matchElementToLabel(grants)),
      allowedScopes: allowedScopes.map(matchElementToLabel(scopes)),
      appType: appType.map(matchElementToLabel(appTypes)),
      ...applicationData,
    };
  },
  validResponse(dispatch) {
    /**
    * Checks if the response is a 2xx response, otherwise throws
    * an error with the status text. Dispatches logout and loginFailure actions
    * if a 401 is present (invalid JWT)
    *
    * @param  {Object} response  The HTTP response from a fetch() call
    * @return {Object|undefined} The response, if valid
    * @throws Will throw an error with the response status text if invalid
    */
    return (response) => {
      if (response.status === 401) {
        dispatch(logout());
        dispatch(loginFailure('Session expired. Please log in.'));
        hashHistory.push('/login');
        throw new Error(response.statusText);
      }
      if (response.status < 200 || response.status > 299) {
        throw new Error(response.statusText);
      }
      return response;
    };
  },
};
