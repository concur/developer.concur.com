import appDetailsReducer from '../../reducers/appDetails';
import {
  appDetailsRequest, appDetailsFailure, appDetailsSuccess, showSecret, hideSecret,
} from '../../actions/appDetails';

describe('appDetails reducer', () => {
  it('should return default state', () => {
    const state = appDetailsReducer(undefined, {});

    expect(state).toEqual({
      app: {},
      isFetching: false,
      error: '',
      showSecret: false,
    });
  });

  it('should handle APP_DETAILS_REQUEST', () => {
    const action = appDetailsRequest();
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      isFetching: true,
      error: '',
      showSecret: false,
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
      showSecret: false,
    });
  });

  it('should handle APP_DETAILS_SUCCESS', () => {
    const app = {
      id: 'test-id',
      name: 'My App',
    };
    const action = appDetailsSuccess(app);
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: app,
      isFetching: false,
      error: '',
      showSecret: false,
    });
  });

  it('should handle APP_DETAILS_SHOW_SECRET', () => {
    const action = showSecret();
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      isFetching: false,
      error: '',
      showSecret: true,
    });
  });

  it('should handle APP_DETAILS_HIDE_SECRET', () => {
    const action = hideSecret();
    const state = appDetailsReducer(undefined, action);

    expect(state).toEqual({
      app: {},
      isFetching: false,
      error: '',
      showSecret: false,
    });
  });
});
