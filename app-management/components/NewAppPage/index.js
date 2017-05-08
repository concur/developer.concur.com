import { connect } from 'react-redux';
import NewAppPage from './NewAppPage';
import { postApp } from '../../actions/appChange';
import { sharedHelpers } from '../../utils/actionHelpers';

export function mapStateToProps(state) {
  return state.appChange;
}

export function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (app) => {
      const composedApp = sharedHelpers.composeApp(app);
      dispatch(postApp(composedApp));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAppPage);
