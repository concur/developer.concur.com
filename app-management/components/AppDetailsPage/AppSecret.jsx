import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret, collapsed }) => (
  <div>
    {secret && !collapsed &&
      <p>
        <strong>
          Here is your new app secret.
        </strong>
        <br />
        <code>{secret}</code>
      </p>
    }
    <button
      type="button"
      className="btn concur-blue"
      onClick={clickHandler}
    >
      Get New Secret
    </button>
  </div>
);

AppSecret.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  secret: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
};

export default AppSecret;
