import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  APP_LISTING_REQUEST, APP_LISTING_FAILURE, APP_LISTING_SUCCESS,
  appListingRequest, appListingFailure, appListingSuccess, fetchAppListing,
} from '../../actions/appListing';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('appListingRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: APP_LISTING_REQUEST,
    };

    expect(appListingRequest()).toEqual(expectedAction);
  });
});

describe('appListingFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: APP_LISTING_FAILURE,
      message,
    };

    expect(appListingFailure(message)).toEqual(expectedAction);
  });
});

describe('appListingSuccess', () => {
  it('should create an action with the apps fetched', () => {
    const apps = [
      {
        id: 'test-id',
        name: 'My App',
      },
      {
        id: 'test-id-2',
        name: 'My App 2'
      }
    ];
    const expectedAction = {
      type: APP_LISTING_SUCCESS,
      apps,
    };

    expect(appListingSuccess(apps)).toEqual(expectedAction);
  });
});

describe('fetchAppListing', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appListingSuccess action when fetching is successful', () => {
    const apps = [
      {
        id: 'test-id',
        name: 'My App',
      },
      {
        id: 'test-id-2',
        name: 'My App 2'
      }
    ];

    nock(process.env.API_SERVER)
      .get('/apps')
      .reply(200, apps);

    const expectedActions = [
      appListingRequest(),
      appListingSuccess(apps),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appListingFailure action when fetching fails', () => {
    const apps = [
      {
        id: 'test-id',
        name: 'My App',
      },
      {
        id: 'test-id-2',
        name: 'My App 2'
      }
    ];

    nock(process.env.API_SERVER)
      .get('/apps')
      .replyWithError('Server is down');

    const expectedActions = [
      appListingRequest(),
      appListingFailure('request to http://localhost:3000/apps failed, reason: Server is down'),
    ];

    const store = mockStore({
      auth: {
        token: 'a-sample-token',
      },
    });

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
