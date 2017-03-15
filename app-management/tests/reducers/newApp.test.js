import newAppReducer from '../../reducers/newApp';
import {
  newAppRequest, newAppFailure, newAppSuccess
} from '../../actions/newApp';
import appFactory from '../app.mock';

describe('newApp reducer', () => {
  it('should return default state', () => {
    const state = newAppReducer(undefined, {});

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: '',
    });
  });

  it('should handle NEW_APP_REQUEST', () => {
    const action = newAppRequest();
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: true,
      error: '',
    });
  });

  it('should handle NEW_APP_FAILURE', () => {
    const message = 'The request failed';
    const action = newAppFailure(message);
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: message,
    });
  });

  it('should handle NEW_APP_SUCCESS', () => {
    const app = appFactory('id-1');
    const clientSecret = 'a-client-secret';
    const action = newAppSuccess(app, clientSecret);
    const state = newAppReducer(undefined, action);

    expect(state).toEqual({
      app: app,
      clientSecret: clientSecret,
      isFetching: false,
      error: '',
    });
  });
});
