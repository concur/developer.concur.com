import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import signupReducer from './signup';
import appListingReducer from './appListing';
import appDetailsReducer from './appDetails';
import newAppReducer from './newApp';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  signup: signupReducer,
  newApp: newAppReducer,
  appListing: appListingReducer,
  appDetails: appDetailsReducer,
});

export default appReducer;
