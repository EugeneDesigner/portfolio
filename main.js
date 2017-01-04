import 'babel-polyfill'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import MainReducer from './pages/store/reducers'
import { browserHistory, Router } from 'react-router'
import routes from './core/router'

const store = createStore(MainReducer, applyMiddleware(thunk))

console.log(store)
const container = document.getElementById('container')

const component = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      {routes}
  </Router>
)

ReactDOM.render(<Provider store={store}>{component}</Provider>, container)

FastClick.attach(document.body)
