import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/auth';

const defaultState = {
  authenticated: false,
  token: null,
};

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        authenticated: true,
        token: action.token,
      };
    case AUTH_LOGOUT:
      return defaultState;
    default:
      return state;
  }
}

export default authReducer;
