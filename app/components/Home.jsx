import React from 'react';
import {hashHistory} from 'react-router';

const Home = () =>
  <div className="col-sm-12">
    <div className="jumbotron">
      <div className="page-header">
        <h1>Welcome to ReactBoard</h1>
      </div>
      <p>This is the homepage for ReactBoard. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <button className="btn btn-primary" onClick={() => hashHistory.push('/messages')}>Click here to get started</button>
    </div>
  </div>

export default Home;
