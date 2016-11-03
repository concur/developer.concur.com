import React, { PropTypes } from 'react';

const LoadingSpinner = ({ loading }) => (
  loading ? <i className="fa fa-spinner fa-4x fa-spin" /> : null
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingSpinner;
