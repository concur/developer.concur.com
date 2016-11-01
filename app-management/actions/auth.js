export const TOKEN_KEY = 'concur-devcenter-jwt';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export function login(token) {
  return {
    type: AUTH_LOGIN,
    token,
  };
}

export function logout() {
  return {
    type: AUTH_LOGOUT,
  };
}
