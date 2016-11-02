import auth from '../utils/auth';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export function login(token) {
  auth.setToken(token);
  return {
    type: AUTH_LOGIN,
    token,
  };
}

export function logout() {
  auth.removeToken();
  return {
    type: AUTH_LOGOUT,
  };
}
