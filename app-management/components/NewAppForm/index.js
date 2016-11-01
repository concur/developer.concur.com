import { connect } from 'react-redux';
import NewAppForm from './NewAppForm';
import {
  handleInputChange, handleCheckboxChange,
  handleMultipleSelectChange, postNewApp,
} from '../../actions/newApp';

function mapStateToProps(state) {
  return state.newAppForm;
}

function mapDispatchToProps(dispatch) {
  return {
    handleInputChange: e => dispatch(handleInputChange(e.target.name, e.target.value)),
    handleCheckboxChange: e => dispatch(handleCheckboxChange(e.target.name)),
    handleMultipleSelectChange: e => dispatch(handleMultipleSelectChange(
      e.target.name,
      e.target.options,
    )),
    postNewApp: (e) => {
      e.preventDefault();
      dispatch(postNewApp());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAppForm);
