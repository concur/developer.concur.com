/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './routes';

class App extends React.Component {
  render() {
    return (
      <AppRoutes />
    );
  }
}

const mountingNode = document.getElementById('app-management-root');

if (mountingNode) {
  ReactDOM.render(<App />, mountingNode);
}
