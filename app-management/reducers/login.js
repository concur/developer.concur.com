import { LOGIN_HANDLE_INPUT_CHANGE } from '../actions/login';

const defaultState = {
  username: '',
  password: '',
};

function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_HANDLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.fieldName]: action.newValue,
      });
    default:
      return state;
  }
}

export default loginReducer;
