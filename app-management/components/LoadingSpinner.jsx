import React, { PropTypes } from 'react';

const LoadingSpinner = ({ loading, message }) => (
  loading ? (
    <h2>
      <i className="fa fa-spinner fa-spin" />
      {message || 'Loading...'}
    </h2>
  ) : null
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoadingSpinner;
