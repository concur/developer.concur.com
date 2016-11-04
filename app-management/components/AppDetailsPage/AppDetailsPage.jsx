/* eslint-env browser */

import React, { PropTypes } from 'react';
import AppEditForm from './AppEditForm';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const id = this.props.params.id;
    this.props.fetchAppDetails(id);
  }

  render () {
    const { isFetching, error, app, handleSubmit } = this.props;

    if (isFetching) {
      return (
        <div className="row">
          <div className="col-md-12">
            <i className="fa fa-spinner fa-4x fa-spin" />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="row">
          <div className="col-md-12">
            <p>An error occurred when loading this app</p>
          </div>
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>{app.name}</h2>
          <AppEditForm
            initialValues={app}
            onSubmit={handleSubmit}
          />
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
