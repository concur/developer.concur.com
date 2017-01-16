import React, { PropTypes } from 'react';

const CertificationBadge = ({ certified }) => (
  certified ? (
    <small className="certification-badge certified">
      <i className="fa fa-check-circle" aria-hidden="true" /> CERTIFIED
    </small>
  ) : (
    <small className="certification-badge not-certified">
      <i className="fa fa-times-circle" aria-hidden="true" /> NOT CERTIFIED
    </small>
  )
);

CertificationBadge.propTypes = {
  certified: PropTypes.bool,
};

export default CertificationBadge;
