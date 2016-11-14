import {
  APP_DETAILS_REQUEST, APP_DETAILS_FAILURE, APP_DETAILS_SUCCESS,
  APP_DETAILS_SHOW_SECRET, APP_DETAILS_HIDE_SECRET,
} from '../actions/appDetails';

const defaultState = {
  app: {},
  isFetching: false,
  error: '',
  showSecret: false,
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
    case APP_DETAILS_SHOW_SECRET:
      return {
        ...state,
        showSecret: true,
      };
    case APP_DETAILS_HIDE_SECRET:
      return {
        ...state,
        showSecret: false,
      };
    default:
      return state;
  }
}

export default appDetailsReducer;
