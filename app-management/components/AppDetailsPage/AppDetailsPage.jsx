import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';
import AppSecret from './AppSecret';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import CertificationBadge from '../CertificationBadge';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    this.props.fetchAppDetails(this.props.params.id);
  }

  render () {
    const {
      appDetails,
      appChange,
      generateSecretHandler,
      putAppHandler,
    } = this.props;
    let content;

    if (appDetails.isFetching) {
      content = <LoadingSpinner loading={appDetails.isFetching} />;
    } else if (appDetails.error) {
      content = <ErrorAlert error={appDetails.error} />;
    } else {
      const { app } = appDetails;
      content = (
        <div>
          <h2>
            <span>{app.name}</span>
            <CertificationBadge certified={app.certified} />
          </h2>
          <br />
          <LoadingSpinner loading={appChange.isFetching} />
          <ErrorAlert error={appChange.error} />
          <div className="row">
            <section className="col-md-8">
              <div className="form-group">
                <label htmlFor="clientId" className="control-label">clientId</label>
                <input
                  value={app.id}
                  type="text"
                  className="form-control"
                  id="clientId"
                  disabled
                />
              </div>
            </section>
            <AppSecret clickHandler={() => generateSecretHandler(app.id, app.name)} />
          </div>
          <AppEditForm
            initialValues={app}
            onSubmit={formData => putAppHandler(formData, app.name)}
          />
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
  appChange: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  appDetails: PropTypes.shape({
    app: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  generateSecretHandler: PropTypes.func.isRequired,
  putAppHandler: PropTypes.func.isRequired,
  fetchAppDetails: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppDetailsPage;
