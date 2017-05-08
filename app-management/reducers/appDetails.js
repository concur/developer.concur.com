import {
  APP_DETAILS_REQUEST, APP_DETAILS_FAILURE, APP_DETAILS_SUCCESS,
} from '../actions/appDetails';

const defaultState = {
  app: {},
  isFetching: false,
  error: '',
};

function appDetailsReducer(state = defaultState, action) {
  switch (action.type) {
    case APP_DETAILS_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case APP_DETAILS_FAILURE:
      return {
        ...defaultState,
        error: action.message,
      };
    case APP_DETAILS_SUCCESS:
      return {
        ...defaultState,
        app: action.app,
      };
    default:
      return state;
  }
}

export default appDetailsReducer;
