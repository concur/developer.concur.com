import React, { PropTypes } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const AppSecret = ({ clickHandler, appSecret: { clientSecret, error, isFetching } }) => (
  <div>
    <ErrorAlert error={error} />
    <div className="alert alert-warning">
      <LoadingSpinner loading={isFetching} />
      {clientSecret ? (
        <p>
          <strong>
            Here is your new clientSecret. Make sure to copy it now. You will not be able
            to see it again.
          </strong>
          <br />
          <code>{clientSecret}</code>
        </p>
      ) : (
        <div>
          <p>
            You can regenerate your clientSecret below.
            This process will clear your old clientSecret and require updates to your
            apps or scripts.
          </p>
          <button
            type="button"
            className="btn orange"
            onClick={clickHandler}
          >
            Regenerate clientSecret
          </button>
        </div>
      )}
    </div>
  </div>
);

AppSecret.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  appSecret: PropTypes.shape({
    clientSecret: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AppSecret;
