import React from 'react';
import {Link, IndexLink, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions';
import firebase from 'app/firebase';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeUser: false }

    this.startUserLogout = this.startUserLogout.bind(this);
    this.redirectUserLogin = this.redirectUserLogin.bind(this);
  }

  startUserLogout() {
    this.props.actions.userLogout();
    hashHistory.push('/');
  }

  redirectUserLogin() {
    hashHistory.push('/user/login');
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({activeUser: true})
      } else {
        this.setState({activeUser: false})
      }
    })
  }

  render() {
    const renderAuthButtons = () => {
      let {activeUser} = this.state;
      if (!activeUser) {
        return (
          <li>
            <button
              className="btn btn-success navbar-btn"
              style={{marginRight: 10}}
              onClick={this.redirectUserLogin}>log in</button>
          </li>
        )
      } else {
        return (
          <div className="btn-group">
            <button
              className="btn btn-primary dropdown-toggle navbar-btn"
              style={{marginRight: 10}}
              data-toggle="dropdown">Profile <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li><Link to="/user/profile">View profile</Link></li>
              <li role="separator" className="divider"></li>
              <li>
                <button
                  className="btn btn-danger"
                  style={{margin: '0 30%'}}
                  onClick={this.startUserLogout}>log out</button>
              </li>
            </ul>
          </div>
        )
      }
    }

    return (
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
              {renderAuthButtons()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
