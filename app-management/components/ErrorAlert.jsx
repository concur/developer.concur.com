import React, { PropTypes } from 'react';

const ErrorAlert = ({ error }) => (
  error ? <div className="alert alert-danger">{error}</div> : null
);

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

export default ErrorAlert;
