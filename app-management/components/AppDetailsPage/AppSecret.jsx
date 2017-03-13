import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret }) => (
  <div className="alert alert-warning">
    <p>
      You can regenerate your app secret below.
      This process will clear your old secret and require updates to your
      apps or scripts.
    </p>
    <button
      type="button"
      className="btn orange"
      onClick={clickHandler}
    >
      Regenerate App secret
    </button>
    {secret &&
      <p>
        <strong>
          Here is your new secret.
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

AppSecret.defaultProps = {
  secret: null,
};

export default AppSecret;
