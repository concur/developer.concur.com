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
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  message: null,
};

export default LoadingSpinner;
