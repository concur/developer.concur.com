import appChangeReducer from '../../reducers/appChange';
import {
  appChangeRequest, appChangeFailure, appChangeSuccess
} from '../../actions/appChange';
import appFactory from '../app.mock';

describe('appChange reducer', () => {
  it('should return default state', () => {
    const state = appChangeReducer(undefined, {});

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: '',
    });
  });

  it('should handle APP_CHANGE_REQUEST', () => {
    const action = appChangeRequest();
    const state = appChangeReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: true,
      error: '',
    });
  });

  it('should handle APP_CHANGE_FAILURE', () => {
    const message = 'The request failed';
    const action = appChangeFailure(message);
    const state = appChangeReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      clientSecret: '',
      isFetching: false,
      error: message,
    });
  });

  it('should handle APP_CHANGE_SUCCESS', () => {
    const app = appFactory('id-1');
    const clientSecret = 'a-client-secret';
    const action = appChangeSuccess(app, clientSecret);
    const state = appChangeReducer(undefined, action);

    expect(state).toEqual({
      app: app,
      clientSecret: clientSecret,
      isFetching: false,
      error: '',
    });
  });
});
