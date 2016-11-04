/* eslint-env browser */

import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const id = this.props.params.id;
    this.props.fetchAppDetails(id);
  }

  render () {
    const { isFetching, error, app, handleSubmit } = this.props;
    let content;

    if (isFetching) {
      content = <LoadingSpinner loading={isFetching} />;
    } else if (error) {
      content = <ErrorAlert error={error} />;
    } else {
      content = (
        <div>
          <h2>{app.name}</h2>
          <AppEditForm initialValues={app} onSubmit={handleSubmit} />
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
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  app: PropTypes.object.isRequired,
};

export default AppDetailsPage;
