import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import PageContainer from './components/PageContainer';
import AppListing from './components/AppListing';
import AppDetails from './components/AppDetails';
import NewAppForm from './components/NewAppForm';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Logout from './components/auth/Logout';
import NotFound from './components/NotFound';

import auth from './utils/auth';

function requireAuth(nextState, replaceState) {
  if (!auth.getToken()) {
    replaceState('/login');
  }
}

function showAuthForms(nextState, replaceState) {
  if (auth.getToken()) {
    replaceState('/');
  }
}

function logout(nextState, replaceState) {
  if (auth.getToken()) {
    auth.removeToken();
  } else {
    replaceState('/login');
  }
}

const AppRoutes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={PageContainer}>
      <IndexRoute component={AppListing} onEnter={requireAuth} />
      <Route path="new" component={NewAppForm} onEnter={requireAuth} />
      <Route path="details/:id" component={AppDetails} onEnter={requireAuth} />
      <Route path="login" component={LoginForm} onEnter={showAuthForms} />
      <Route path="signup" component={SignupForm} onEnter={showAuthForms} />
      <Route path="logout" component={Logout} onEnter={logout} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default AppRoutes;
