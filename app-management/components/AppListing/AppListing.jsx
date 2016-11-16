import React, { PropTypes } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import AppPreview from './AppPreview';

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
      content = apps.map(app => <AppPreview app={app} key={app.id} />);
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
