import React, { PropTypes } from 'react';
import NewAppForm from './NewAppForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const NewAppPage = ({ handleSubmit, isFetching, error }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>New App</h2>
      <LoadingSpinner loading={isFetching} />
      <ErrorAlert error={error} />
      <NewAppForm onSubmit={handleSubmit} />
    </div>
  </div>
);

NewAppPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default NewAppPage;
