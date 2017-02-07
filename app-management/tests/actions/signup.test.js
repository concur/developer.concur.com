import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import {
  SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS,
  signupRequest, signupFailure, signupSuccess, postSignup,
} from '../../actions/signup';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('signupRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: SIGNUP_REQUEST,
    };

    expect(signupRequest()).toEqual(expectedAction);
  });
});

describe('signupFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: SIGNUP_FAILURE,
      message,
    };

    expect(signupFailure(message)).toEqual(expectedAction);
  });
});

describe('signupSuccess', () => {
  it('should create an action with a user token', () => {
    const token = 'a-sample-token';
    const expectedAction = {
      type: SIGNUP_SUCCESS,
      token,
    };

    expect(signupSuccess(token)).toEqual(expectedAction);
  });
});

describe('postSignup', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: null },
    });
  })

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a signupSuccess action when fetching is successful', () => {
    const user = {
      firstName: 'John',
      lastName: 'Smith',
      username: 'johnsmith',
      email: 'johnsmith@concur.com',
      password: 'password',
      passwordConfirm: 'password',
    };

    const response = {
      user,
      access_token: 'a-sample-token',
    };

    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .reply(200, response);

    const expectedActions = [
      signupRequest(),
      signupSuccess(response.access_token),
      reset('signup'),
    ];

    return store.dispatch(postSignup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a signupFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .replyWithError('Server is down');

    const expectedActions = [
      signupRequest(),
      signupFailure(`request to ${process.env.DEVCENTER_API_FORMS}/register failed, reason: Server is down`),
    ];

    return store.dispatch(postSignup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
