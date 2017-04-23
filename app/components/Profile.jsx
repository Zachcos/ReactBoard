import React from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import firebase from 'app/firebase';

export class Profile extends React.Component {
  render() {
    const currentUser = firebase.auth().currentUser;
    const {messages} = this.props;

    const renderMessageList = () => {
      return messages.map(message => {
        if (currentUser.uid === message.userId) {
          return (
            <div key={message.id} className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{message.subject}</h3>
              </div>
              <div className="panel-body">
                <p>{message.body}</p>
              </div>
              <div className="panel-footer">
                <Link to={`/messages/${message.id}`}>Message id: {message.id}</Link>
              </div>
            </div>
          )
        }
      })
    }

    return (
      <div className="col-sm-12">
        <div className="col-sm-7">
          <h2>{currentUser.displayName}'s Profile</h2>
          <p>Display name: {currentUser.displayName}</p>
          <p>Email: {currentUser.email}</p>
          <p>UserId: {currentUser.uid}</p>
        </div>
        <div className="col-sm-5">
          {renderMessageList()}
        </div>
      </div>
    )
  };
};

export default connect((state) => state)(Profile);
