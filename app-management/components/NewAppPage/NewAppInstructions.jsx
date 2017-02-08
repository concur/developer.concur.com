import React from 'react';
import { Link } from 'react-router';

const NewAppInstructions = () => (
  <div>
    <h3>Welcome to App Management</h3>
    <p>
      Create a new app by going to the <Link to="/new">Create an App form</Link>
    </p>
  </div>
);

export default NewAppInstructions;
