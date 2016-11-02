/* eslint-env browser */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class AppListing extends React.Component {
  componentWillMount() {
    this.props.fetchAppListing();
  }

  render () {
    if (this.props.isFetching) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h2>My Apps</h2>
            <i className="fa fa-spinner fa-4x fa-spin" />
          </div>
        </div>
      );
    }

    if (this.props.error) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h2>My Apps</h2>
            <p>An error occurred when loading your apps</p>
          </div>
        </div>
      );
    }

    const appItems = this.props.apps.map(({ id, name }) => (
      <div className="well col-md-4 col-sm-12" key={id}>
        <h3>{name}</h3>
        <Link to={`/details/${id}`} className="btn-u btn-u-green">Details</Link>
        <Link to="" className="btn-u btn-u-blue">Edit</Link>
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>My Apps</h2>
          <div className="row">
            {appItems}
          </div>
        </div>
      </div>
    );
  }
}

AppListing.propTypes = {
  fetchAppListing: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape()),
};

export default AppListing;
