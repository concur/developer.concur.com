import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import signupReducer from './signup';

const appReducer = combineReducers({
  auth: authReducer,
  loginForm: loginReducer,
  signupForm: signupReducer,
});

export default appReducer;
