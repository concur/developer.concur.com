import {
  GENERATE_APP_SECRET_REQUEST, GENERATE_APP_SECRET_FAILURE, GENERATE_APP_SECRET_SUCCESS,
  CLEAR_APP_SECRET,
} from '../actions/generateAppSecret';

const defaultState = {
  app: {},
  clientSecret: '',
  error: '',
  isFetching: false,
};

function generateAppSecretReducer(state = defaultState, action) {
  switch (action.type) {
    case GENERATE_APP_SECRET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case GENERATE_APP_SECRET_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case GENERATE_APP_SECRET_SUCCESS:
      return {
        ...defaultState,
        app: action.app,
        clientSecret: action.clientSecret,
      };
    case CLEAR_APP_SECRET:
      return defaultState;
    default:
      return state;
  }
}

export default generateAppSecretReducer;
