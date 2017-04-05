import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS, AUTH_LOGOUT,
} from '../actions/auth';

const defaultState = {
  token: null,
  isFetching: false,
  error: '',
};

function authReducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        token: action.token,
        isFetching: false,
        error: '',
      };
    case AUTH_LOGOUT:
      return defaultState;
    default:
      return state;
  }
}

export default authReducer;
