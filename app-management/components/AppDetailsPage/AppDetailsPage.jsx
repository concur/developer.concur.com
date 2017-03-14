/* eslint-env browser */

import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';
import AppSecret from './AppSecret';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import CertificationBadge from '../CertificationBadge';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const id = this.props.params.id;
    this.props.fetchAppDetails(id);
  }

  render () {
    const {
      appDetails: { isFetching, error, app },
      appSecret,
      generateSecretHandler,
    } = this.props;
    let content;

    if (isFetching) {
      content = <LoadingSpinner loading={isFetching} />;
    } else if (error) {
      content = <ErrorAlert error={error} />;
    } else {
      content = (
        <div>
          <h2>
            {app.name}&nbsp;
            <CertificationBadge certified={app.certified} />
          </h2>
          <AppSecret
            clickHandler={() => generateSecretHandler(app.id)}
            appSecret={appSecret}
          />
          <AppEditForm initialValues={app} />
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-md-12">
          {content}
        </div>
      </div>
    );
  }
}

AppDetailsPage.propTypes = {
  appDetails: PropTypes.shape({
    app: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  appSecret: PropTypes.shape({
    app: PropTypes.object.isRequired,
    clientSecret: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  generateSecretHandler: PropTypes.func.isRequired,
  fetchAppDetails: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppDetailsPage;
