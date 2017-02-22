import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = ({ authenticated }) => {
  const links = authenticated ? (
    <ul className="nav navbar-nav">
      <li>
        <Link to="/" activeClassName="active" onlyActiveOnIndex>
          <i className="fa fa-list" aria-hidden="true" /> My Apps
        </Link>
      </li>
      <li>
        <Link to="/new" activeClassName="active">
          <i className="fa fa-plus" aria-hidden="true" /> Create an App
        </Link>
      </li>
      <li>
        <Link to="/logout" activeClassName="active">
          <i className="fa fa-sign-out" aria-hidden="true" /> Logout
        </Link>
      </li>
    </ul>
  ) : (
    <ul className="nav navbar-nav">
      <li>
        <Link to="/signup" activeClassName="active">
          <i className="fa fa-user" aria-hidden="true" /> Sign Up
        </Link>
      </li>
      <li>
        <Link to="/login" activeClassName="active">
          <i className="fa fa-sign-in" aria-hidden="true" /> Login
        </Link>
      </li>
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
