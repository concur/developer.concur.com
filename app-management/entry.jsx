/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';

import AppRoutes from './components/AppRoutes';
import auth from './utils/auth';
import { login } from './actions/auth';

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware)
);

const token = auth.getToken();

if (token) {
  store.dispatch(login(token));
}

const App = () => (
  <Provider store={store}>
    <AppRoutes store={store} />
  </Provider>
);

const mountingNode = document.getElementById('app-management-root');

if (mountingNode) {
  ReactDOM.render(<App />, mountingNode);
}
