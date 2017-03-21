import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import signupReducer from './signup';
import appListingReducer from './appListing';
import appDetailsReducer from './appDetails';
import newAppReducer from './newApp';
import generateAppSecretReducer from './generateAppSecret';

const appReducer = combineReducers({
  appDetails: appDetailsReducer,
  appListing: appListingReducer,
  appSecret: generateAppSecretReducer,
  auth: authReducer,
  form: formReducer,
  newApp: newAppReducer,
  signup: signupReducer,
});

export default appReducer;
