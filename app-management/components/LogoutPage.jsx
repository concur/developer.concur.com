import React from 'react';
import { Link } from 'react-router';

const Logout = () => (
  <div>
    <h2>You are logged out</h2>
    <Link to="/login">Login</Link>
  </div>
);

export default Logout;
