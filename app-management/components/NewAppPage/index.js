import { connect } from 'react-redux';
import NewAppPage from './NewAppPage';
import { postNewApp } from '../../actions/newApp';

function mapStateToProps(state) {
  return state.newApp;
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: values => dispatch(postNewApp(values)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAppPage);
