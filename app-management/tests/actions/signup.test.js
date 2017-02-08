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
