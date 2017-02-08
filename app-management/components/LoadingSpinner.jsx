import React, { PropTypes } from 'react';

const LoadingSpinner = ({ loading, message }) => (
  loading ? (
    <h3>
      <i className="fa fa-spinner fa-spin" />
      &nbsp;
      {message || 'Loading...'}
    </h3>
  ) : null
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
};

export default LoadingSpinner;
