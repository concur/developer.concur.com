import { connect } from 'react-redux';
import NewAppPage from './NewAppPage';
import { postNewApp } from '../../actions/newApp';
import { newAppHelpers } from '../../utils/actionHelpers';

export function mapStateToProps(state) {
  return state.newApp;
}

export function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (app) => {
      const composedApp = newAppHelpers.composeApp(app);
      dispatch(postNewApp(composedApp));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAppPage);
