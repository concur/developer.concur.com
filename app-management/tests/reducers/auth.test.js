import authReducer from '../../reducers/auth';
import {
  loginRequest, loginFailure, loginSuccess, logout,
} from '../../actions/auth';
import LocalStorage from '../localStorage.mock';

window.localStorage = LocalStorage();

describe('auth reducer', () => {
  it('should return default state', () => {
    const state = authReducer(undefined, {});

    expect(state).toEqual({
      token: null,
      isFetching: false,
      error: '',
    });
  });

  it('should handle AUTH_LOGIN_REQUEST', () => {
    const action = loginRequest();
    const state = authReducer(undefined, action);

    expect(state).toEqual({
      token: null,
      isFetching: true,
      error: '',
    });
  });

  it('should handle AUTH_LOGIN_FAILURE', () => {
    const message = 'The request failed';
    const action = loginFailure(message);
    const state = authReducer(undefined, action);

    expect(state).toEqual({
      token: null,
      isFetching: false,
      error: message,
    });
  });

  it('should handle AUTH_LOGIN_SUCCESS', () => {
    const token = 'a-sample-token';
    const action = loginSuccess(token);
    const state = authReducer(undefined, action);

    expect(state).toEqual({
      token: token,
      isFetching: false,
      error: '',
    });
  });

  it('should handle AUTH_LOGOUT', () => {
    const action = logout();
    const state = authReducer(undefined, action);

    expect(state).toEqual({
      token: null,
      isFetching: false,
      error: '',
    });
  });
});
