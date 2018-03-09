import PropTypes from 'prop-types';
import React from 'react';

const AppSecret = ({ clickHandler }) => (
  <div>
    <div className="col-md-8">
      <a href="#client-secret-generation" data-toggle="collapse">Regenerate clientSecret</a>
      <div
        className="collapse panel panel-danger"
        data-toggle="collapse"
        id="client-secret-generation"
      >
        <div className="panel-body">
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
      </div>
    </div>
  </div>
);

AppSecret.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default AppSecret;
