import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import signupReducer from './signup';
import appListingReducer from './appListing';
import newAppReducer from './newApp';

const appReducer = combineReducers({
  auth: authReducer,
  loginForm: loginReducer,
  signupForm: signupReducer,
  newAppForm: newAppReducer,
  appListing: appListingReducer,
});

export default appReducer;
