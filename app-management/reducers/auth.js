/* eslint-env browser */

import { AUTH_LOGIN, AUTH_LOGOUT, TOKEN_KEY } from '../actions/auth';

const auth = {
  setToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },
};


const defaultState = {
  authenticated: !!auth.getToken(),
  token: auth.getToken(),
};

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      auth.setToken(action.token);
      return {
        authenticated: true,
        token: auth.getToken(),
      };
    case AUTH_LOGOUT:
      auth.removeToken();
      return {
        authenticated: false,
        token: auth.getToken(),
      };
    default:
      return state;
  }
}

export default authReducer;
