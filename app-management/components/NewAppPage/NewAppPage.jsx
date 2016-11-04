import React, { PropTypes } from 'react';
import NewAppForm from './NewAppForm';

const NewAppPage = props => (
  <div className="row">
    <div className="col-md-12">
      <h2>New App</h2>
      <NewAppForm onSubmit={props.handleSubmit} />
    </div>
  </div>
);

NewAppPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewAppPage;
