import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <ul className="nav navbar-nav">
          <li><Link to={'/'} activeClassName="active">My Apps</Link></li>
          <li><Link to={'/new'} activeClassName="active">New App</Link></li>
          <li><Link to={'/signup'} activeClassName="active">Sign Up</Link></li>
          <li><Link to={'/login'} activeClassName="active">Login</Link></li>
          <li><Link to={'/logout'} activeClassName="active">Logout</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
