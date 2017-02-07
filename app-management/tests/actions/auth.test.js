import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import {
  AUTH_LOGIN_REQUEST, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT,
  loginRequest, loginFailure, loginSuccess, login, logout,
} from '../../actions/auth';
import LocalStorage from '../localStorage.mock';
import { TOKEN_KEY } from '../../utils/auth';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
window.localStorage = LocalStorage();

describe('loginRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: AUTH_LOGIN_REQUEST,
    };

    expect(loginRequest()).toEqual(expectedAction);
  });
});

describe('loginFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: AUTH_LOGIN_FAILURE,
      message,
    };

    expect(loginFailure(message)).toEqual(expectedAction);
  });
});

describe('loginSuccess', () => {
  it('should create an action with a user token and set localStorage', () => {
    const token = 'a-sample-token';
    const expectedAction = {
      type: AUTH_LOGIN_SUCCESS,
      token,
    };

    expect(loginSuccess(token)).toEqual(expectedAction);
    expect(window.localStorage.getItem(TOKEN_KEY)).toBe(token);
  });
});

describe('logout', () => {
  it('should create an action resetting auth state and localStorage', () => {
    const expectedAction = {
      type: AUTH_LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
    expect(window.localStorage.getItem(TOKEN_KEY)).toBeNull();
  });
});

describe('login', () => {
  const user = {
    username: 'johnsmith',
    password: 'password',
  };
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: null },
    });
  })

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a loginSuccess action when fetching is successful', () => {
    const response = {
      access_token: 'a-sample-token',
    };

    nock(process.env.DEVCENTER_API_FORMS)
      .post('/auth/login')
      .reply(200, response);

    const expectedActions = [
      loginRequest(),
      loginSuccess(response.access_token),
      reset('login'),
    ];

    return store.dispatch(login(user))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a loginFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/auth/login')
      .replyWithError('Server is down');

    const expectedActions = [
      loginRequest(),
      loginFailure(`request to ${process.env.DEVCENTER_API_FORMS}/auth/login failed, reason: Server is down`),
    ];

    return store.dispatch(login(user))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a loginFailure action when authentication fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/auth/login')
      .reply(401, { message: 'Unauthorized' });

    const expectedActions = [
      loginRequest(),
      loginFailure('Invalid username and/or password'),
    ];

    return store.dispatch(login(user))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
