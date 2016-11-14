import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  APP_DETAILS_REQUEST, APP_DETAILS_FAILURE, APP_DETAILS_SUCCESS, APP_DETAILS_SHOW_SECRET,
  APP_DETAILS_HIDE_SECRET, appDetailsRequest, appDetailsFailure, appDetailsSuccess,
  fetchAppDetails, showSecret, hideSecret,
} from '../../actions/appDetails';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('appDetailsRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: APP_DETAILS_REQUEST,
    };

    expect(appDetailsRequest()).toEqual(expectedAction);
  });
});

describe('appDetailsFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: APP_DETAILS_FAILURE,
      message,
    };

    expect(appDetailsFailure(message)).toEqual(expectedAction);
  });
});

describe('appDetailsSuccess', () => {
  it('should create an action with the app fetched', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };
    const expectedAction = {
      type: APP_DETAILS_SUCCESS,
      app,
    };

    expect(appDetailsSuccess(app)).toEqual(expectedAction);
  });
});

describe('showSecret', () => {
  it('should create an action to show the app secret', () => {
    const expectedAction = {
      type: APP_DETAILS_SHOW_SECRET,
    };

    expect(showSecret()).toEqual(expectedAction);
  });
});

describe('hideSecret', () => {
  it('should create an action to hide the app secret', () => {
    const expectedAction = {
      type: APP_DETAILS_HIDE_SECRET,
    };

    expect(hideSecret()).toEqual(expectedAction);
  });
});

describe('fetchAppDetails', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appDetailsSuccess action when fetching is successful', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };

    nock(process.env.API_SERVER)
      .get(`/apps/${app.id}`)
      .reply(200, app);

    const expectedActions = [
      appDetailsRequest(),
      appDetailsSuccess(app),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appDetailsFailure action when fetching fails', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };

    nock(process.env.API_SERVER)
      .get(`/apps/${app.id}`)
      .replyWithError('Server is down');

    const expectedActions = [
      appDetailsRequest(),
      appDetailsFailure('request to http://localhost:3000/apps/test-id failed, reason: Server is down'),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
