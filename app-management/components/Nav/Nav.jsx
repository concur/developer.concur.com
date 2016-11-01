import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = props => (
  <div className="clearfix">
    <ul className="nav navbar-nav">
      { props.loggedIn ? <li><Link to={'/'} activeClassName="active">My Apps</Link></li> : null }
      { props.loggedIn ? <li><Link to={'/new'} activeClassName="active">New App</Link></li> : null }
      { !props.loggedIn ? <li><Link to={'/signup'} activeClassName="active">Sign Up</Link></li> : null }
      { !props.loggedIn ? <li><Link to={'/login'} activeClassName="active">Login</Link></li> : null }
      { props.loggedIn ? <li><Link to={'/logout'} activeClassName="active">Logout</Link></li> : null }
    </ul>
  </div>
);

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Nav;
