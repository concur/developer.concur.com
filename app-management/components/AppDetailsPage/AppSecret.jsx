import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret }) => (
  <div>
    {secret &&
      <p>
        <strong>
          Here is your app secret. This will only be displayed once, so copy it down:
        </strong>
        <br />
        <code>{secret}</code>
      </p>
    }
    <button
      type="button"
      className="btn-u btn-u-orange"
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
