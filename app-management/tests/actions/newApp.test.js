import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { reset } from 'redux-form';
import {
  NEW_APP_REQUEST, NEW_APP_FAILURE, NEW_APP_SUCCESS,
  newAppRequest, newAppFailure, newAppSuccess, postNewApp,
} from '../../actions/newApp';

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
    const app = {
      id: 'test-id',
      name: 'My App',
    };
    const expectedAction = {
      type: NEW_APP_SUCCESS,
      app,
    };

    expect(newAppSuccess(app)).toEqual(expectedAction);
  });
});

describe('postNewApp', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a newAppSuccess action when fetching is successful', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };

    nock(process.env.API_SERVER)
      .post('/apps')
      .reply(200, app);

    const expectedActions = [
      newAppRequest(),
      newAppSuccess(app),
      reset('newApp'),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates a newAppFailure action when fetching fails', () => {
    nock(process.env.API_SERVER)
      .post('/apps')
      .replyWithError('Server is down');

    const expectedActions = [
      newAppRequest(),
      newAppFailure('request to http://localhost:3000/apps failed, reason: Server is down'),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(postNewApp())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
