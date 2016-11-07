import * as appListing from '../../actions/appListing';

describe('appListingRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: appListing.APP_LISTING_REQUEST,
    };

    expect(appListing.appListingRequest()).toEqual(expectedAction);
  });
});

describe('appListingFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: appListing.APP_LISTING_FAILURE,
      message,
    };

    expect(appListing.appListingFailure(message)).toEqual(expectedAction);
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
      type: appListing.APP_LISTING_SUCCESS,
      apps,
    };

    expect(appListing.appListingSuccess(apps)).toEqual(expectedAction);
  });
});

describe('fetchAppListing', () => {
  it.skip('creates an appListingSuccess action when fetching is successful', () => {
    // to be implemented
  });
});
