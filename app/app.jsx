import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate React App</p>,
  document.getElementById('app')
);
