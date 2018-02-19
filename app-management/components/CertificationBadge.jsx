import PropTypes from 'prop-types';
import React from 'react';

const CertificationBadge = ({ certified }) => (
  certified ? (
    <small className="label label-success pull-right">
      <i className="fa fa-check-circle" aria-hidden="true" />
      <span> CERTIFIED</span>
    </small>
  ) : (
    <small className="label label-warning pull-right">
      <i className="fa fa-exclamation-circle" aria-hidden="true" />
      <span> NOT CERTIFIED</span>
    </small>
  )
);

CertificationBadge.propTypes = {
  certified: PropTypes.bool,
};

CertificationBadge.defaultProps = {
  certified: false,
};

export default CertificationBadge;
