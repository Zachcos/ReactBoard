import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
// Static components
import Home from 'Home';
import About from 'About';
// MessageBoardApp components
import MessageBoardApp from 'MessageBoardApp';

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/messages" component={MessageBoardApp} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
