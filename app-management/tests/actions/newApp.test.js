import * as newApp from '../../actions/newApp';

describe('newAppRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: newApp.NEW_APP_REQUEST,
    };

    expect(newApp.newAppRequest()).toEqual(expectedAction);
  });
});

describe('newAppFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: newApp.NEW_APP_FAILURE,
      message,
    };

    expect(newApp.newAppFailure(message)).toEqual(expectedAction);
  });
});

describe('newAppSuccess', () => {
  it('should create an action with the new app', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };
    const expectedAction = {
      type: newApp.NEW_APP_SUCCESS,
      app,
    };

    expect(newApp.newAppSuccess(app)).toEqual(expectedAction);
  });
});

describe('postNewApp', () => {
  it.skip('creates an newAppSuccess action when fetching is successful', () => {
    // to be implemented
  });
});
