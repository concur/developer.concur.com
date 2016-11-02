import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/login';

const defaultState = {
  isFetching: false,
  error: '',
};

function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case LOGIN_SUCCESS:
      return defaultState;
    default:
      return state;
  }
}

export default loginReducer;
