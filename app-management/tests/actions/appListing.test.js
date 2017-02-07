import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  APP_LISTING_REQUEST, APP_LISTING_FAILURE, APP_LISTING_SUCCESS,
  appListingRequest, appListingFailure, appListingSuccess, fetchAppListing,
} from '../../actions/appListing';
import appFactory from '../app.mock';

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
      appFactory('id-1'),
      appFactory('id-2'),
    ];
    const expectedAction = {
      type: APP_LISTING_SUCCESS,
      apps,
    };

    expect(appListingSuccess(apps)).toEqual(expectedAction);
  });
});

describe('fetchAppListing', () => {
  const apps = [
    appFactory('id-1'),
    appFactory('id-2'),
  ];
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { token: 'a-sample-token' },
    });
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('creates an appListingSuccess action when fetching is successful', () => {
    nock(process.env.API_SERVER)
      .get('/apps')
      .reply(200, apps);

    const expectedActions = [
      appListingRequest(),
      appListingSuccess(apps),
    ];

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates an appListingFailure action when fetching fails', () => {
    nock(process.env.API_SERVER)
      .get('/apps')
      .replyWithError('Server is down');

    const expectedActions = [
      appListingRequest(),
      appListingFailure(`request to ${process.env.API_SERVER}/apps failed, reason: Server is down`),
    ];

    return store.dispatch(fetchAppListing())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
