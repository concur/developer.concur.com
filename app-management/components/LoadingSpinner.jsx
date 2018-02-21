import PropTypes from 'prop-types';
import React from 'react';

const LoadingSpinner = ({ loading, message }) => (
  loading ? (
    <h3>
      <i className="fa fa-spinner fa-spin" />
      &nbsp;
      {message}
    </h3>
  ) : null
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  message: 'Loading...',
};

export default LoadingSpinner;
