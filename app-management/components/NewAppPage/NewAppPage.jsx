import React, { PropTypes } from 'react';
import NewAppForm from './NewAppForm';
import LoadingSpinner from '../LoadingSpinner';
import ErrorAlert from '../ErrorAlert';

const NewAppPage = ({ handleSubmit, isFetching, error }) => (
  <div className="row">
    <div className="col-md-12">
      <h2>Create an App</h2>
      <LoadingSpinner loading={isFetching} message="Submitting..." />
      <ErrorAlert error={error} />
      <div className="alert alert-info">
        <p>
          Register your new application (app) with Concur by filling out this form.
          Once you have registered an app, you will receive a clientId and clientSecret
          The clientId is a unique UUID4 identifier for your app. The clientSecret is also
          a unique UUID4, and it serves as your app’s password. You will be using this
          credential to obtain tokens either for the app itself, or on behalf of a user.
        </p>
        <p>
          For more information on this process, please refer to our Getting Started guide for
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/api-reference/authentication/getting-started.html"
          > authentication
          </a>
        </p>
      </div>
      <NewAppForm onSubmit={handleSubmit} />
    </div>
  </div>
);

NewAppPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default NewAppPage;
