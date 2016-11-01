/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';

import AppRoutes from './components/AppRoutes';

const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware)
);

const App = () => (
  <Provider store={store}>
    <AppRoutes store={store} />
  </Provider>
);

const mountingNode = document.getElementById('app-management-root');

if (mountingNode) {
  ReactDOM.render(<App />, mountingNode);
}
