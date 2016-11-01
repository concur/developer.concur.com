import {
  NEW_APP_HANDLE_INPUT_CHANGE, NEW_APP_HANDLE_CHECKBOX_CHANGE,
  NEW_APP_HANDLE_MULTIPLE_SELECT_CHANGE,
} from '../actions/newApp';

const defaultState = {
  appName: '',
  appDescription: '',
  appType: '',
  redirectUrl: '',
  allowedGrants: [],
  allowedScopes: [],
  termsOfUseAgreement: false,
};

function newAppReducer(state = defaultState, action) {
  switch (action.type) {
    case NEW_APP_HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };
    case NEW_APP_HANDLE_CHECKBOX_CHANGE:
      return {
        ...state,
        [action.fieldName]: !state[action.fieldName],
      };
    case NEW_APP_HANDLE_MULTIPLE_SELECT_CHANGE:
      return {
        ...state,
        [action.fieldName]: [...action.options]
                              .filter(option => option.selected)
                              .map(option => option.value),
      };
    default:
      return state;
  }
}

export default newAppReducer;
