import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  APP_DETAILS_REQUEST, APP_DETAILS_FAILURE, APP_DETAILS_SUCCESS, APP_DETAILS_SHOW_SECRET,
  APP_DETAILS_HIDE_SECRET, APP_DETAILS_UPDATE_SUCCESS, appDetailsRequest, appDetailsFailure,
  appDetailsSuccess, fetchAppDetails, appDetailsUpdateSuccess, updateAppDetails, showSecret,
  hideSecret,
} from '../../actions/appDetails';
import appFactory from '../app.mock';

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
    const app = appFactory('id-1');
    const expectedAction = {
      type: APP_DETAILS_SUCCESS,
      app,
    };

    expect(appDetailsSuccess(app)).toEqual(expectedAction);
  });
});

describe('appDetailsUpdateSuccess', () => {
  it('should create an action notifying that the update is successful', () => {
    const expectedAction = {
      type: APP_DETAILS_UPDATE_SUCCESS,
    };

    expect(appDetailsUpdateSuccess()).toEqual(expectedAction);
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
  const app = appFactory('id-1');
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appDetailsSuccess action when fetching is successful', () => {
    nock(process.env.API_SERVER)
      .get(`/apps/${app.id}`)
      .reply(200, app);

    const expectedActions = [
      appDetailsRequest(),
      appDetailsSuccess(app),
    ];

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appDetailsFailure action when fetching fails', () => {
    nock(process.env.API_SERVER)
      .get(`/apps/${app.id}`)
      .replyWithError('Server is down');

    const expectedActions = [
      appDetailsRequest(),
      appDetailsFailure('request to http://localhost:3000/apps/id-1 failed, reason: Server is down'),
    ];

    return store.dispatch(fetchAppDetails(app.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('updateAppDetails', () => {
  const app = appFactory('id-1');
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appDetailsUpdateSuccess action when fetching is successful', () => {
    nock(process.env.API_SERVER)
      .put(`/apps/${app.id}`)
      .reply(200, app);

    const expectedActions = [
      appDetailsRequest(),
      appDetailsUpdateSuccess(app),
      appDetailsRequest(),
    ];

    return store.dispatch(updateAppDetails(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appDetailsFailure action when fetching fails', () => {
    nock(process.env.API_SERVER)
      .put(`/apps/${app.id}`)
      .replyWithError('Server is down');

    const expectedActions = [
      appDetailsRequest(),
      appDetailsFailure('request to http://localhost:3000/apps/id-1 failed, reason: Server is down'),
    ];

    return store.dispatch(updateAppDetails(app))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
