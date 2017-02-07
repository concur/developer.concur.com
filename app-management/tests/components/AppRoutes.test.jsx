import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { shallowToJson } from 'enzyme-to-json';

import AppRoutes from '../../components/AppRoutes';
import appReducer from '../../reducers';
import { loginSuccess } from '../../actions/auth';

// local storage mocks needed for login testing
import LocalStorage from '../localStorage.mock';

const replaceState = jest.fn();
let store;
let routes;

describe('<AppRoutes />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.localStorage = LocalStorage();
    store = createStore(appReducer);
    routes = new AppRoutes({ store });
  });

  describe('isAuthenticated', () => {
    it('returns false when app is not authenticated', () => {
      expect(routes.isAuthenticated()).toBeFalsy();
    });

    it('returns true when app is authenticated', () => {
      store.dispatch(loginSuccess('a-sample-token'));

      expect(routes.isAuthenticated()).toBeTruthy();
    });
  });

  describe('requireAuth', () => {
    it('redirects to login page when the user is not logged in', () => {
      routes.requireAuth(null, replaceState);

      expect(replaceState).toHaveBeenCalledWith('/login');
    });

    it('allows access to a page when the user is logged in', () => {
      store.dispatch(loginSuccess('a-sample-token'));
      routes.requireAuth(null, replaceState);

      expect(replaceState).toHaveBeenCalledTimes(0);
    });
  });

  describe('showAuthForms', () => {
    it('redirects to login page when the user is not logged in', () => {
      routes.showAuthForms(null, replaceState);

      expect(replaceState).toHaveBeenCalledTimes(0);
    });

    it('shows auth forms when the user is logged in', () => {
      store.dispatch(loginSuccess('a-sample-token'));
      routes.showAuthForms(null, replaceState);

      expect(replaceState).toHaveBeenCalledWith('/');
    });
  });

  describe('logout', () => {
    it('redirects to login page when the user is not logged in', () => {
      routes.logout(null, replaceState);

      expect(replaceState).toHaveBeenCalledWith('/login');
    });

    it('logs the user out when the user is logged in', () => {
      store.dispatch(loginSuccess('a-sample-token'));
      routes.logout(null, replaceState);
      const { token } = store.getState().auth;

      expect(replaceState).toHaveBeenCalledTimes(0);
      expect(token).toBeNull();
    });
  });

  describe('render', () => {
    it('renders the router and routes', () => {
      const routes = shallow(<AppRoutes />);

      expect(shallowToJson(routes)).toMatchSnapshot();
    });
  });
});
