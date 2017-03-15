import {
  APP_LISTING_REQUEST,
  APP_LISTING_FAILURE, APP_LISTING_SUCCESS,
} from '../actions/appListing';

const defaultState = {
  apps: [],
  isFetching: false,
  error: '',
};

function appListingReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_LISTING_REQUEST:
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
      };
    default:
      return state;
  }
}

export default appListingReducer;
