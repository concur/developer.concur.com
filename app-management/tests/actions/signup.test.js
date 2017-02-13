import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import { signupRequest, signupFailure, signupSuccess, postSignup } from '../../actions/signup';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('postSignup', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

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
      userid: 'johnsmith@concur.com',
      password: 'password',
    };

    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .reply(200, response);

    const expectedActions = [
      signupRequest(),
      signupSuccess(),
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

  it('creates a signupFailure action when there is a duplicate email', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .reply(200, 'Error (IsDuplicateLoginID): That Login ID already exists - please choose another.');

    const expectedActions = [
      signupRequest(),
      signupFailure('That email already exists. Please choose another.'),
    ];

    return store.dispatch(postSignup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a signupFailure action when there is a critical server error', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .reply(200, 'Error (Critical): ...');

    const expectedActions = [
      signupRequest(),
      signupFailure('A server error occurred when creating your account. Please try again later.'),
    ];

    return store.dispatch(postSignup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a signupFailure action when there is a gateway timeout', () => {
    nock(process.env.DEVCENTER_API_FORMS)
      .post('/register')
      .reply(504, '<HTML><HEAD>\n<TITLE>Gateway Timeout - In read </TITLE>...</HEAD></HTML>');

    const expectedActions = [
      signupRequest(),
      signupFailure('A server error occurred when creating your account. Please try again later.'),
    ];

    return store.dispatch(postSignup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
