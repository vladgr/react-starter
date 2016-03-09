import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import TodoListCont from './containers/TodoListCont'
import rootReducer from './reducers'

const DevTools = createDevTools(
  <DockMonitor changePositionKey="ctrl-q" toggleVisibilityKey="ctrl-h">
    <LogMonitor preserveScrollTop={false} theme="tomorrow"  />
  </DockMonitor>
)

const store = createStore(
    rootReducer,
    DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route component={App} path='/'>
                    <IndexRoute component={Home}/>
                    <Route component={About} path='about' />
                    <Route component={TodoListCont} path='todos' />
                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
)

