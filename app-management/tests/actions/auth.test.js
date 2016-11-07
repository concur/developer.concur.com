import * as auth from '../../actions/auth';
import LocalStorage from '../localStorage.mock';
import { TOKEN_KEY } from '../../utils/auth';

window.localStorage = LocalStorage();

describe('loginRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: auth.AUTH_LOGIN_REQUEST,
    };

    expect(auth.loginRequest()).toEqual(expectedAction);
  });
});

describe('loginFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: auth.AUTH_LOGIN_FAILURE,
      message,
    };

    expect(auth.loginFailure(message)).toEqual(expectedAction);
  });
});

describe('loginSuccess', () => {
  it('should create an action with a user token and set localStorage', () => {
    const token = 'a-sample-token';
    const expectedAction = {
      type: auth.AUTH_LOGIN_SUCCESS,
      token,
    };

    expect(auth.loginSuccess(token)).toEqual(expectedAction);
    expect(window.localStorage.getItem(TOKEN_KEY)).toBe(token);
  });
});

describe('logout', () => {
  it('should create an action resetting auth state and localStorage', () => {
    const expectedAction = {
      type: auth.AUTH_LOGOUT,
    };

    expect(auth.logout()).toEqual(expectedAction);
    expect(window.localStorage.getItem(TOKEN_KEY)).toBe(null);
  });
});

describe('login', () => {
  it.skip('creates an authSuccess action when fetching is successful', () => {
    // to be implemented
  });
});
