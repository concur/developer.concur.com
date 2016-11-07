import * as appDetails from '../../actions/appDetails';

describe('appDetailsRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: appDetails.APP_DETAILS_REQUEST,
    };

    expect(appDetails.appDetailsRequest()).toEqual(expectedAction);
  });
});

describe('appDetailsFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: appDetails.APP_DETAILS_FAILURE,
      message,
    };

    expect(appDetails.appDetailsFailure(message)).toEqual(expectedAction);
  });
});

describe('appDetailsSuccess', () => {
  it('should create an action with the app fetched', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };
    const expectedAction = {
      type: appDetails.APP_DETAILS_SUCCESS,
      app,
    };

    expect(appDetails.appDetailsSuccess(app)).toEqual(expectedAction);
  });
});

describe('fetchAppDetails', () => {
  it.skip('creates an appDetailsSuccess action when fetching is successful', () => {
    // to be implemented
  });
});
