/* eslint-env browser */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class AppDetailsPage extends React.Component {
  componentWillMount() {
    const id = this.props.params.id;
    this.props.fetchAppDetails(id);
  }

  render () {
    if (this.props.isFetching) {
      return (
        <div className="row">
          <div className="col-md-12">
            <i className="fa fa-spinner fa-4x fa-spin" />
          </div>
        </div>
      );
    }

    if (this.props.error) {
      return (
        <div className="row">
          <div className="col-md-12">
            <p>An error occurred when loading this app</p>
            <Link to="/">Back to My Apps</Link>
          </div>
        </div>
      );
    }

    const { app } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>{app.name}</h2>
          <div className="row">
            <p>{app.description}</p>
          </div>
          <Link to="/">&larr; Back to My Apps</Link>
        </div>
      </div>
    );
  }
}

AppDetailsPage.propTypes = {
  fetchAppDetails: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  app: PropTypes.object.isRequired,
};

export default AppDetailsPage;
