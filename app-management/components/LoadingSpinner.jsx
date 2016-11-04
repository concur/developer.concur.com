import React, { PropTypes } from 'react';

const LoadingSpinner = ({ loading }) => (
  loading ? <h2><i className="fa fa-spinner fa-spin" /> Loading...</h2> : null
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingSpinner;
