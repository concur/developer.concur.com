import React, { PropTypes } from 'react';

import Nav from './Nav';

const PageContainer = props => (
  <div className="container">
    <Nav />
    {props.children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
