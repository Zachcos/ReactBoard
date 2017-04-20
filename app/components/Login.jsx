import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import LoginForm from 'LoginForm';
import * as actions from 'actions';
import {bindActionCreators} from 'redux';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      }
    };

    this.startUserLogin = this.startUserLogin.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user})
  }

  startUserLogin(event) {
    event.preventDefault();
    this.props.actions.startUserLogin(this.state.user);
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h2>Login</h2>
        <LoginForm
          user={this.state.user}
          onChange={this.updateUserState}
          onSave={this.startUserLogin} />
          <br />
          <div style={{marginTop: 100, textAlign: 'center'}}>
            <Link to="/user/new">Click Here</Link> if you need to create an account.
          </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
