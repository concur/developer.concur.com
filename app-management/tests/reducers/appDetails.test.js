import appDetailsReducer from '../../reducers/appDetails';
import {
  appDetailsRequest, appDetailsFailure, appDetailsSuccess,
} from '../../actions/appDetails';
import appFactory from '../app.mock';

describe('appDetails reducer', () => {
  it('should return default state', () => {
    const state = appDetailsReducer(undefined, {});

    expect(state).toEqual({
      app: {},
      isFetching: false,
      error: '',
    });
  });

  it('should handle APP_DETAILS_REQUEST', () => {
    const action = appDetailsRequest();
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      isFetching: true,
      error: '',
    });
  });

  it('should handle APP_DETAILS_FAILURE', () => {
    const message = 'The request failed';
    const action = appDetailsFailure(message);
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      isFetching: false,
      error: message,
    });
  });

  it('should handle APP_DETAILS_SUCCESS', () => {
    const app = appFactory('test-id');
    const action = appDetailsSuccess(app);
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: app,
      isFetching: false,
      error: '',
    });
  });
});
