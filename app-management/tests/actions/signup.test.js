import * as signup from '../../actions/signup';

describe('signupRequest', () => {
  it('should create an action notifying a request has begun', () => {
    const expectedAction = {
      type: signup.SIGNUP_REQUEST,
    };

    expect(signup.signupRequest()).toEqual(expectedAction);
  });
});

describe('signupFailure', () => {
  it('should create an action notifying a request failure and its message', () => {
    const message = 'This request failed';
    const expectedAction = {
      type: signup.SIGNUP_FAILURE,
      message,
    };

    expect(signup.signupFailure(message)).toEqual(expectedAction);
  });
});

describe('signupSuccess', () => {
  it('should create an action with a user token', () => {
    const token = 'a-sample-token';
    const expectedAction = {
      type: signup.SIGNUP_SUCCESS,
      token,
    };

    expect(signup.signupSuccess(token)).toEqual(expectedAction);
  });
});

describe('postSignup', () => {
  it.skip('creates an signupSuccess action when fetching is successful', () => {
    // to be implemented
  });
});
