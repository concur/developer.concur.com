import React from 'react';
import { Link } from 'react-router';

class AppListing extends React.Component {
  constructor(props) {
    super(props);
    const apps = [
      {
        id: '2342asdfas',
        name: 'Starbucks',
      },
      {
        id: '234asdfasdf',
        name: 'Uber',
      },
      {
        id: 'asldfkajsdflj',
        name: 'My App',
      },
    ];
    this.state = { apps };
  }

  render () {
    const appItems = this.state.apps.map((app) => {
      const { id, name } = app;
      return (
        <div className="well" key={id}>
          <h2>{name}</h2>
          <Link to="" className="btn-u btn-u-green">Details</Link>
          <Link to="" className="btn-u btn-u-blue">Edit</Link>
        </div>
      );
    });

    return (
      <div className="row">
        <div className="col-md-12">
          <h1>My Apps</h1>
          <div className="row">
            {appItems}
          </div>
        </div>
      </div>
    );
  }
}

export default AppListing;
