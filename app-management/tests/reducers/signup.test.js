import signupReducer from '../../reducers/signup';
import {
  signupRequest, signupFailure, signupSuccess,
} from '../../actions/signup';

describe('signup reducer', () => {
  it('should return default state', () => {
    const state = signupReducer(undefined, {});

    expect(state).toEqual({
      isFetching: false,
      error: '',
    });
  });

  it('should handle SIGNUP_REQUEST', () => {
    const action = signupRequest();
    const state = signupReducer(undefined, action);

    expect(state).toEqual({
      isFetching: true,
      error: '',
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    const message = 'The request failed';
    const action = signupFailure(message);
    const state = signupReducer(undefined, action);

    expect(state).toEqual({
      isFetching: false,
      error: message,
    });
  });

  it('should handle SIGNUP_SUCCESS', () => {
    const action = signupSuccess();
    const state = signupReducer(undefined, action);

    expect(state).toEqual({
      isFetching: false,
      error: '',
    });
  });
});
