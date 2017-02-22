import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import CertificationBadge from '../CertificationBadge';

const AppPreview = ({ app: { id, name, certified } }) => (
  <div className="well col-md-12" key={id}>
    <h3>
      <Link to={`/details/${id}`}>{name} </Link>
      <CertificationBadge certified={certified} />
    </h3>
  </div>
);

AppPreview.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppPreview;
