import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from 'actions';
import NewUserForm from 'NewUserForm';

export class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        displayName: '',
        email: '',
        password: '',
        username: ''
      }
    }

    this.saveUser = this.saveUser.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user})
  }

  saveUser(event) {
    event.preventDefault();
    alert(event.target.username)
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Create Profile</h2>
        <NewUserForm
          user={this.state.user}
          onSave={this.saveUser}
          onChange={this.updateUserState} />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
