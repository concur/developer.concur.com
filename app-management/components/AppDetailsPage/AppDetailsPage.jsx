/* eslint-env browser */

import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';
import CertificationBadge from '../CertificationBadge';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const id = this.props.params.id;
    this.props.fetchAppDetails(id);
  }

  render () {
    const { isFetching, error, app, handleSubmit, generateSecret, showSecret } = this.props;
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

          <AppEditForm
            initialValues={app}
            onSubmit={handleSubmit}
            generateSecret={generateSecret}
            showSecret={showSecret}
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
  handleSubmit: PropTypes.func.isRequired,
  fetchAppDetails: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  generateSecret: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  app: PropTypes.object.isRequired,
  showSecret: PropTypes.bool.isRequired,
};

export default AppDetailsPage;
