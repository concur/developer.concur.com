import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret }) => (
  <div className="alert alert-warning">
    <p>
      You can regenerate your clientSecret below.
      This process will clear your old clientSecret and require updated to your
      apps or scripts.
    </p>
    <button
      type="button"
      className="btn orange"
      onClick={clickHandler}
    >
      Regenerate Application clientSecret
    </button>
    {secret &&
      <p>
        <strong>
          Here is your new clientSecret.
        </strong>
        <br />
        <code>{secret}</code>
      </p>
    }
  </div>
);

AppSecret.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  secret: PropTypes.string,
};

export default AppSecret;
