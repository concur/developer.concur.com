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
    const content = apps.map(app => <AppPreview app={app} key={app.id} />);
    const showNewAppInstructions = !isFetching && apps.length === 0;

    return (
      <div className="row">
        <div className="col-md-12">
          <h2><i className="fa fa-list" aria-hidden="true" /> My Apps</h2>
          <br />
          <LoadingSpinner loading={isFetching} />
          <ErrorAlert error={error} />
          {showNewAppInstructions ? <NewAppInstructions /> : null}
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
