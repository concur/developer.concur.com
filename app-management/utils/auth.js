/* eslint-env browser */

const TOKEN_KEY = 'concur-devcenter-jwt';

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

export default auth;
