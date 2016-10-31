/* eslint-env browser */

import React from 'react';
import { Link } from 'react-router';

class AppListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      loading: true,
      error: false,
    };
  }

  componentWillMount() {
    window.fetch(`${process.env.API_SERVER}/apps`)
      .then(response => response.json())
      .then(apps => this.setState({
        apps,
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
            <h1>My Apps</h1>
            <p>Loading...</p>
          </div>
        </div>
      );
    }

    if (this.state.error) {
      return (
        <div className="row">
          <div className="col-md-12">
            <h1>My Apps</h1>
            <p>An error occurred when loading your apps</p>
          </div>
        </div>
      );
    }

    const appItems = this.state.apps.map((app) => {
      const { id, name } = app;
      return (
        <div className="well col-md-4 col-sm-12" key={id}>
          <h3>{name}</h3>
          <Link to={`/details/${id}`} className="btn-u btn-u-green">Details</Link>
          <Link to="" className="btn-u btn-u-blue">Edit</Link>
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col-md-12">
          <h2>My Apps</h2>
          <div className="row">
            {appItems}
          </div>
        </div>
      </div>
    );
  }
}

export default AppListing;
