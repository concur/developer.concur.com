import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import { loginRequest, loginFailure, loginSuccess, login, logout } from '../../actions/auth';
import LocalStorage from '../localStorage.mock';
import { TOKEN_KEY } from '../../utils/auth';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
window.localStorage = LocalStorage();

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
      .reply(403, {
        "error": "invalid_grant",
        "error_description": "Incorrect Credentials. Please Retry",
        "code": 5
      });

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
