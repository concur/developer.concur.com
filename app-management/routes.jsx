import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import PageContainer from './components/PageContainer';
import AppListing from './components/AppListing';
import NewAppForm from './components/NewAppForm';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import NotFound from './components/NotFound';

class AppRoutes extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PageContainer}>
          <IndexRoute component={AppListing} />
          <Route path="new" component={NewAppForm} />
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignupForm} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

export default AppRoutes;
