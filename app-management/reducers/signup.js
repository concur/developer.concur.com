import { SIGNUP_HANDLE_INPUT_CHANGE } from '../actions/signup';

const defaultState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case SIGNUP_HANDLE_INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.fieldName]: action.newValue,
      });
    default:
      return state;
  }
}

export default signupReducer;
