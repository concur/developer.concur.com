import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

const AppChangeSuccessPage = ({ app, clientSecret }) => (
  <div>
    {app.id && app.name && clientSecret ? (
      <div>
        <h2>
          Here are your updated app credentials.
        </h2>
        <p>
          <strong>Copy down your clientSecret. You will not be able to see it again.</strong>
        </p>
        <hr />
        <p>
          <strong>Name: </strong>
          <span>{app.name}</span>
        </p>
        <p>
          <strong>clientId: </strong>
          <code>{app.id}</code>
        </p>
        <p>
          <strong>clientSecret: </strong>
          <code>{clientSecret}</code>
        </p>
        <Link to={`/details/${app.id}`} className="btn bright-blue">Go to App Details</Link>
      </div>
    ) : (
      <div>
        <h2>Not found</h2>
        <Link to="/" className="btn bright-blue">Back to My Apps</Link>
      </div>
    )}
  </div>
);

AppChangeSuccessPage.propTypes = {
  app: PropTypes.object.isRequired,
  clientSecret: PropTypes.string.isRequired,
};

export default AppChangeSuccessPage;
