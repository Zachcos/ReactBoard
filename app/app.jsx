import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// App CSS
require('style!css!sass!applicationStyles')

import Main from 'Main';
// Static components
import Home from 'Home';
import About from 'About';
// MessageBoardApp components
import MessageBoardApp from 'MessageBoardApp';
import Message from 'Message';

// configure redux store
const store = require('configureStore').configure();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/messages' component={MessageBoardApp}>
          <Route path='/messages/:id' component={Message} />
        </Route>
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
