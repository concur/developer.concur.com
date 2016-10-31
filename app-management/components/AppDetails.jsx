/* eslint-env browser */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class AppDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: {},
      loading: false,
      error: false,
    };
  }

  componentWillMount() {
    window.fetch(`${process.env.API_SERVER}/apps/${this.props.params.id}`)
      .then(response => response.json())
      .then(app => this.setState({
        app,
        loading: false,
      }))
      .catch(() => this.setState({
        error: true,
        loading: false,
      }));
  }

  render () {
    if (this.state.loading) {
      return (
        <div className="row">
          <div className="col-md-12">
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className="row">
          <div className="col-md-12">
            <p>An error occurred when loading this app</p>
            <Link to="/">Back to My Apps</Link>
          </div>
        </div>
      );
    }

    const { app } = this.state;

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>{app.name}</h2>
          <Link to="/">&larr; Back to My Apps</Link>
          <div className="row">
            <p>{app.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

AppDetails.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default AppDetails;
