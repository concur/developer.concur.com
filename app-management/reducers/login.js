import {
  LOGIN_HANDLE_INPUT_CHANGE, LOGIN_REQUEST,
  LOGIN_FAILURE, LOGIN_SUCCESS,
} from '../actions/login';

const defaultState = {
  username: '',
  password: '',
  isFetching: false,
  error: null,
};

function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isfetching: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        username: '',
        password: '',
      };
    default:
      return state;
  }
}

export default loginReducer;
