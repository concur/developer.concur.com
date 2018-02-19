import PropTypes from 'prop-types';
import React from 'react';

const ErrorAlert = ({ error }) => (
  error ? <div className="alert alert-danger">{error}</div> : null
);

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

ErrorAlert.defaultProps = {
  error: null,
};

export default ErrorAlert;
