import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import signupReducer from './signup';
import appListingReducer from './appListing';

const appReducer = combineReducers({
  auth: authReducer,
  loginForm: loginReducer,
  signupForm: signupReducer,
  appListing: appListingReducer,
});

export default appReducer;
