import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import CertificationBadge from '../CertificationBadge';

const AppPreview = ({ app: { id, name, certified } }) => (
  <div key={id}>
    <h3>
      <Link to={`/details/${id}`}>{name} </Link>
      <CertificationBadge certified={certified} />
    </h3>
    <p>
      <strong>clientId: </strong>
      <code>{id}</code>
    </p>
    <hr />
  </div>
);

AppPreview.propTypes = {
  app: PropTypes.object.isRequired,
};

export default AppPreview;
