import generateAppSecretReducer from '../../reducers/generateAppSecret';
import {
  generateAppSecretRequest, generateAppSecretFailure, generateAppSecretSuccess,
  clearAppSecret,
} from '../../actions/generateAppSecret';
import appFactory from '../app.mock';

describe('generateAppSecret reducer', () => {
  it('should return default state', () => {
    const state = generateAppSecretReducer(undefined, {});

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: '',
    });
  });

  it('should handle GENERATE_APP_SECRET_REQUEST', () => {
    const action = generateAppSecretRequest();
    const state = generateAppSecretReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: true,
      error: '',
    });
  });

  it('should handle GENERATE_APP_SECRET_FAILURE', () => {
    const message = 'The request failed';
    const action = generateAppSecretFailure(message);
    const state = generateAppSecretReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: message,
    });
  });

  it('should handle GENERATE_APP_SECRET_SUCCESS', () => {
    const app = appFactory('test-id');
    const clientSecret = 'a-client-secret';
    const action = generateAppSecretSuccess(app, clientSecret);
    const state = generateAppSecretReducer(undefined, action);

    expect(state).toEqual({
      app: app,
      clientSecret: clientSecret,
      isFetching: false,
      error: '',
    });
  });

  it('should handle CLEAR_APP_SECRET', () => {
    const app = appFactory('test-id');
    const clientSecret = 'a-client-secret';
    const showSecretState = {
      app: app,
      clientSecret: clientSecret,
      isFetching: false,
      error: '',
    };

    const action = clearAppSecret();
    const state = generateAppSecretReducer(showSecretState, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: '',
    });
  });
});
