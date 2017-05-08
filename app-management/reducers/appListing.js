import {
  APP_LISTING_REQUEST, APP_LISTING_FAILURE, APP_LISTING_SUCCESS,
} from '../actions/appListing';
import { AUTH_LOGOUT } from '../actions/auth';
import { APP_CHANGE_SUCCESS } from '../actions/appChange';

const defaultState = {
  apps: [],
  isFetching: false,
  error: '',
  validCache: false,
};

function appListingReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_LISTING_REQUEST:
      if (state.validCache) return state;
      return {
        ...defaultState,
        isFetching: true,
      };
    case APP_LISTING_FAILURE:
      return {
        ...defaultState,
        error: action.message,
      };
    case APP_LISTING_SUCCESS:
      return {
        ...defaultState,
        apps: action.apps,
        validCache: true,
      };
    case AUTH_LOGOUT:
    case APP_CHANGE_SUCCESS:
      return {
        ...state,
        validCache: false,
      };
    default:
      return state;
  }
}

export default appListingReducer;
