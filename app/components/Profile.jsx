import React from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import firebase from 'app/firebase';

export class Profile extends React.Component {
  render() {
    const currentUser = firebase.auth().currentUser;

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>{currentUser.displayName}'s Profile</h2>
        <p>Display name: {currentUser.displayName}</p>
        <p>Email: {currentUser.email}</p>
        <p>UserId: {currentUser.uid}</p>
      </div>
    )
  };
};

export default connect((state) => state)(Profile);
