import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';
import AppSecret from './AppSecret';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import CertificationBadge from '../CertificationBadge';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const { id } = this.props.params;
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
            <span>{app.name}</span>
            <CertificationBadge certified={app.certified} />
          </h2>
          <br />
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
            <AppSecret
              clickHandler={() => generateSecretHandler(app.id, app.name)}
              appSecret={appSecret}
            />
          </div>
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
