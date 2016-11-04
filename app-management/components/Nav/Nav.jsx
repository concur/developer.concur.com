import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = ({ authenticated }) => {
  const links = authenticated ? (
    <ul className="nav navbar-nav pull-right">
      <li><Link to="/" activeClassName="active" onlyActiveOnIndex>My Apps</Link></li>
      <li><Link to="/new" activeClassName="active">New App</Link></li>
      <li><Link to="/logout" activeClassName="active">Logout</Link></li>
    </ul>
  ) : (
    <ul className="nav navbar-nav pull-right">
      <li><Link to="/signup" activeClassName="active">Sign Up</Link></li>
      <li><Link to="/login" activeClassName="active">Login</Link></li>
    </ul>
  );

  return (
    <div className="clearfix">
      {links}
    </div>
  );
};

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Nav;
