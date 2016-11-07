import {
  NEW_APP_REQUEST, NEW_APP_FAILURE, NEW_APP_SUCCESS,
} from '../actions/newApp';

const defaultState = {
  isFetching: false,
  error: '',
};

function newAppReducer(state = defaultState, action) {
  switch (action.type) {
    case NEW_APP_REQUEST:
      return {
        isFetching: true,
        error: '',
      };
    case NEW_APP_FAILURE:
      return {
        isFetching: false,
        error: action.message,
      };
    case NEW_APP_SUCCESS:
      return defaultState;
    default:
      return state;
  }
}

export default newAppReducer;
