import React, { PropTypes } from 'react';

const AppSecret = ({ clickHandler, secret, showSecret }) => (
  <div className="alert alert-warning">
    <p>
      If you forgot your application secret, you can regenerate the secret below.
      This process will clear your old secret and require updated to your
      apps or scripts.
    </p>
    <button
      type="button"
      className="btn orange"
      onClick={clickHandler}
    >
      Regenerate Application Secret
    </button>
    {secret && showSecret &&
      <p>
        <strong>
          Here is your new app secret.
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
  showSecret: PropTypes.bool.isRequired,
};

export default AppSecret;
