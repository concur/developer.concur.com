import React, { PropTypes } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const AppSecret = ({ clickHandler, appSecret: { clientSecret, error, isFetching } }) => (
  <div>
    <div className="col-md-8">
      <a href="#client-secret-generation" data-toggle="collapse">Regenerate clientSecret</a>
      <div
        className="collapse panel panel-danger"
        data-toggle="collapse"
        id="client-secret-generation"
      >
        <div className="panel-body">
          <ErrorAlert error={error} />
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
              </p>
              <p>
                <strong>WARNING: </strong>
                This process will clear your old clientSecret and require updates to your
                apps or scripts.
              </p>
              <button
                type="button"
                className="btn orange small"
                onClick={clickHandler}
              >
                Regenerate clientSecret
              </button>
            </div>
          )}
        </div>
      </div>
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
