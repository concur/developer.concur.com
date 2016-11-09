import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret }) => (
  <div>
    {secret &&
      <p>
        <strong>
          Here is your app secret. This will only be displayed once, so copy it down:
        </strong>
        {secret}
      </p>
    }
    <button
      type="button"
      className="button pull-right"
      onClick={clickHandler}
    >
      Get New Secret
    </button>
  </div>
);

AppSecret.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  secret: PropTypes.string,
};

export default AppSecret;
