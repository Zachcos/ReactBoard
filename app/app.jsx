import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import firebase from 'app/firebase';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
// Static components
import Home from 'Home';
import About from 'About';
// MessageBoardApp components
import MessageBoardApp from 'MessageBoardApp';
import Message from 'Message';
import NewMessage from 'NewMessage';
// User Auth components
import NewUser from 'NewUser';
import Login from 'Login';
import Profile from 'Profile';

// configure redux store
const store = require('configureStore').configure();

// Dispatch actions to add firebase data to redux store
store.dispatch(actions.startAddMessages());
store.dispatch(actions.startAddUsers());

// Logging current user on auth state change
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('user logged in:', user);
  } else {
    console.log('no user currently logged in')
  }
});

// requireAuth function to ensure users are logged in when creating messages
const requireAuth = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/user/new');
  }
  next();
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/messages' component={MessageBoardApp}>
          <Route path='/messages/new' component={NewMessage} onEnter={requireAuth} />
          <Route path='/messages/:id' component={Message} />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/user/new' component={NewUser} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/profile' component={Profile} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
