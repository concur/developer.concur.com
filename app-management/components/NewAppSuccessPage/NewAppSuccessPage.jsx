import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NewAppSuccessPage = ({ app, clientSecret }) => (
  <div>
    {app.id && app.name && clientSecret ? (
      <div>
        <h2>
          Your app has been created.
        </h2>
        <p>
          <strong>Copy down your app secret. You will not be able to see it again.</strong>
        </p>
        <hr />
        <p>
          <strong>Name: </strong>
          <span>{app.name}</span>
        </p>
        <p>
          <strong>Id: </strong>
          <code>{app.id}</code>
        </p>
        <p>
          <strong>Secret: </strong>
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

NewAppSuccessPage.propTypes = {
  app: PropTypes.object.isRequired,
  clientSecret: PropTypes.string.isRequired,
};

export default NewAppSuccessPage;
