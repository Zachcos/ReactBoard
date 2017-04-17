import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () =>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-left">
        <a className="navbar-brand" href="#">MsgBrd</a>
      </div>
      <div className="navbar-right">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  </nav>

export default Navigation;
