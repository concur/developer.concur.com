import {
  APP_DETAILS_REQUEST, APP_DETAILS_FAILURE, APP_DETAILS_SUCCESS,
  APP_DETAILS_TOKEN_SUCCESS,
} from '../actions/appDetails';

const defaultState = {
  app: {},
  refreshToken: '',
  isFetching: false,
  error: '',
};

function appDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case APP_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case APP_DETAILS_SUCCESS:
      return {
        ...defaultState,
        app: action.app,
      };
    case APP_DETAILS_TOKEN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        refreshToken: action.refreshToken,
      };
    default:
      return state;
  }
}

export default appDetailsReducer;
