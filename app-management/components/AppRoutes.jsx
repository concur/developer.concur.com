import PropTypes from 'prop-types';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import PageContainer from './PageContainer';
import AppListing from './AppListing';
import AppDetailsPage from './AppDetailsPage';
import NewAppPage from './NewAppPage';
import AppChangeSuccessPage from './AppChangeSuccessPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import NotFound from './NotFound';

import { logout } from '../actions/auth';

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
    this.showAuthForms = this.showAuthForms.bind(this);
    this.logout = this.logout.bind(this);
  }

  isAuthenticated() {
    const { store } = this.props;
    return !!store.getState().auth.token;
  }

  requireAuth(nextState, replaceState) {
    if (!this.isAuthenticated()) {
      replaceState('/login');
    }
  }

  showAuthForms(nextState, replaceState) {
    if (this.isAuthenticated()) {
      replaceState('/');
    }
  }

  logout(nextState, replaceState) {
    if (this.isAuthenticated()) {
      this.props.store.dispatch(logout());
    } else {
      replaceState('/login');
    }
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PageContainer}>
          <IndexRoute component={AppListing} onEnter={this.requireAuth} />
          <Route path="new" component={NewAppPage} onEnter={this.requireAuth} />
          <Route path="success" component={AppChangeSuccessPage} onEnter={this.requireAuth} />
          <Route path="details/:id" component={AppDetailsPage} onEnter={this.requireAuth} />
          <Route path="login" component={LoginPage} onEnter={this.showAuthForms} />
          <Route path="logout" component={LogoutPage} onEnter={this.logout} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

AppRoutes.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default AppRoutes;
