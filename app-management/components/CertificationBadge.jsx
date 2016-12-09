import React, { PropTypes } from 'react';

const CertificationBadge = ({ certified }) => (
  certified ? (
    <small>
      <i className="fa fa-check-circle" aria-hidden="true" /> CERTIFIED
    </small>
  ) : (
    <small>
      <i className="fa fa-times-circle" aria-hidden="true" /> NOT CERTIFIED
    </small>
  )
);

CertificationBadge.propTypes = {
  certified: PropTypes.bool,
};

export default CertificationBadge;
