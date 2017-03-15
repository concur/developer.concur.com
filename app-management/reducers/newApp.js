import {
  NEW_APP_REQUEST, NEW_APP_FAILURE, NEW_APP_SUCCESS,
} from '../actions/newApp';

const defaultState = {
  app: {},
  clientSecret: '',
  error: '',
  isFetching: false,
};

function newAppReducer(state = defaultState, action) {
  switch (action.type) {
    case NEW_APP_REQUEST:
      return {
        ...defaultState,
        isFetching: true,
      };
    case NEW_APP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case NEW_APP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        app: action.app,
        clientSecret: action.clientSecret,
      };
    default:
      return state;
  }
}

export default newAppReducer;
