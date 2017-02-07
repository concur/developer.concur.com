import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import {
  NEW_APP_REQUEST, NEW_APP_FAILURE, NEW_APP_SUCCESS,
  newAppRequest, newAppFailure, newAppSuccess, postNewApp,
} from '../../actions/newApp';
import appFactory from '../app.mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('newAppRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: NEW_APP_REQUEST,
    };

    expect(newAppRequest()).toEqual(expectedAction);
  });
});

describe('newAppFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: NEW_APP_FAILURE,
      message,
    };

    expect(newAppFailure(message)).toEqual(expectedAction);
  });
});

describe('newAppSuccess', () => {
  it('should create an action with the new app', () => {
    const app = appFactory('id-1');
    const expectedAction = {
      type: NEW_APP_SUCCESS,
      app,
    };

    expect(newAppSuccess(app)).toEqual(expectedAction);
  });
});

describe('postNewApp', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  })

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a newAppSuccess action when fetching is successful', () => {
    const app = appFactory('id-1');

    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .post('/')
      .reply(200, app);

    const expectedActions = [
      newAppRequest(),
      newAppSuccess(app),
      reset('newApp'),
    ];

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a newAppFailure action when fetching fails', () => {
    nock(process.env.DEVCENTER_API_ORCHESTRATION)
      .post('/')
      .replyWithError('Server is down');

    const expectedActions = [
      newAppRequest(),
      newAppFailure(`request to ${process.env.DEVCENTER_API_ORCHESTRATION} failed, reason: Server is down`),
    ];

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
