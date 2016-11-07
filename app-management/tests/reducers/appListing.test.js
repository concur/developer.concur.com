import appListingReducer from '../../reducers/appListing';
import {
  appListingRequest, appListingFailure, appListingSuccess,
} from '../../actions/appListing';

describe('appListing reducer', () => {
  it('should return default state', () => {
    const state = appListingReducer(undefined, {});

    expect(state).toEqual({
      apps: [],
      isFetching: false,
      error: '',
    });
  });

  it('should handle APP_LISTING_REQUEST', () => {
    const action = appListingRequest();
    const state = appListingReducer(undefined, action);

    expect(state).toEqual({
      apps: [],
      isFetching: true,
      error: '',
    });
  });

  it('should handle APP_LISTING_FAILURE', () => {
    const message = 'The request failed';
    const action = appListingFailure(message);
    const state = appListingReducer(undefined, action);

    expect(state).toEqual({
      apps: [],
      isFetching: false,
      error: message,
    });
  });

  it('should handle APP_LISTING_SUCCESS', () => {
    const apps = [
      {
        id: 'test-id',
        name: 'My App',
      },
      {
        id: 'test-id-2',
        name: 'My App 2',
      }
    ];
    const action = appListingSuccess(apps);
    const state = appListingReducer(undefined, action);

    expect(state).toEqual({
      apps: apps,
      isFetching: false,
      error: '',
    });
  });
});
