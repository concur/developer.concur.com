import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/signup';

const defaultState = {
  isFetching: false,
  error: '',
};

function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        isFetching: true,
        error: '',
      };
    case SIGNUP_FAILURE:
      return {
        isFetching: false,
        error: action.message,
      };
    case SIGNUP_SUCCESS:
      return defaultState;
    default:
      return state;
  }
}

export default signupReducer;
