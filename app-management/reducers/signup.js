import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../actions/signup';

const defaultState = {
  isFetching: false,
  error: '',
};

function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...defaultState,
        error: action.message,
      };
    case SIGNUP_SUCCESS:
      return defaultState;
    default:
      return state;
  }
}

export default signupReducer;
