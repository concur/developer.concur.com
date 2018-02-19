import PropTypes from 'prop-types';
import React from 'react';

import Nav from './Nav';

const PageContainer = ({ children }) => (
  <div className="container app-management">
    <Nav />
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
