

import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';

import store from './core/store';
import { browserHistory, Router } from 'react-router';
import routes from './core/router';




const container = document.getElementById('container');

const component = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      {routes}
  </Router>
)

ReactDOM.render(<Provider store={store}>{component}</Provider>, container);

FastClick.attach(document.body);
