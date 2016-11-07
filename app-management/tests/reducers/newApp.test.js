import newAppReducer from '../../reducers/newApp';
import {
  newAppRequest, newAppFailure, newAppSuccess
} from '../../actions/newApp';

describe('newApp reducer', () => {
  it('should return default state', () => {
    const state = newAppReducer(undefined, {});

    expect(state).toEqual({
      isFetching: false,
      error: '',
    });
  });

  it('should handle NEW_APP_REQUEST', () => {
    const action = newAppRequest();
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      isFetching: true,
      error: '',
    });
  });

  it('should handle NEW_APP_FAILURE', () => {
    const message = 'The request failed';
    const action = newAppFailure(message);
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      isFetching: false,
      error: message,
    });
  });

  it('should handle NEW_APP_SUCCESS', () => {
    const action = newAppSuccess();
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      isFetching: false,
      error: '',
    });
  });
});
