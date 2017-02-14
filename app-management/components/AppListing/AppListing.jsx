import React, { PropTypes } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import AppPreview from './AppPreview';
import NewAppInstructions from '../NewAppPage/NewAppInstructions';

class AppListing extends React.Component {
  componentWillMount() {
    this.props.fetchAppListing();
  }

  render () {
    const { isFetching, error, apps } = this.props;
    let content;

    if (isFetching) {
      content = <LoadingSpinner loading={isFetching} />;
    } else if (apps.length > 0) {
      content = apps.map(app => <AppPreview app={app} key={app.id} />);
    } else {
      content = <NewAppInstructions />;
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
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default AppListing;
