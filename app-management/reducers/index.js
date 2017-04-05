import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import signupReducer from './signup';
import appListingReducer from './appListing';
import appDetailsReducer from './appDetails';
import appChangeReducer from './appChange';

const appReducer = combineReducers({
  appDetails: appDetailsReducer,
  appListing: appListingReducer,
  auth: authReducer,
  form: formReducer,
  appChange: appChangeReducer,
  signup: signupReducer,
});

export default appReducer;
