import React from 'react';

import { Link } from 'react-router';

class Logout extends React.Component {
  render () {
    return (
      <div>
        <h2>You are logged out</h2>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Logout;
