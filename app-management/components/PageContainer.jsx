import React, { PropTypes } from 'react';

import Nav from './Nav';

class PageContainer extends React.Component {
  render () {
    return (
      <div className="container">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
