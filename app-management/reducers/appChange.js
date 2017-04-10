import {
  APP_CHANGE_REQUEST, APP_CHANGE_FAILURE, APP_CHANGE_SUCCESS, APP_CHANGE_CLEAR,
} from '../actions/appChange';
import { APP_DETAILS_REQUEST } from '../actions/appDetails';

const defaultState = {
  app: {},
  clientSecret: '',
  error: '',
  isFetching: false,
};

function appChangeReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_CHANGE_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case APP_CHANGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case APP_CHANGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        app: action.app,
        clientSecret: action.clientSecret,
      };
    case APP_CHANGE_CLEAR:
    case APP_DETAILS_REQUEST:
      return defaultState;
    default:
      return state;
  }
}

export default appChangeReducer;
