/* eslint-env browser */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

class AppListing extends React.Component {
  componentWillMount() {
    this.props.fetchAppListing();
  }

  render () {
    const { isFetching, error, apps } = this.props;
    let content;

    if (isFetching) {
      content = <LoadingSpinner loading={isFetching} />;
    } else {
      content = apps.map(({ id, name }) => (
        <div className="well col-md-12" key={id}>
          <h3><Link to={`/details/${id}`}>{name}</Link></h3>
        </div>
      ));
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <h2><i className="fa fa-list" aria-hidden="true" /> My Apps</h2>
          <ErrorAlert error={error} />
          {content}
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
