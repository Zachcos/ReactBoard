import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions';
import PropTypes from 'prop-types';
import firebase from 'app/firebase';

import MessageForm from 'MessageForm';

export class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      message: this.props.message
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
  }

  updateMessageState(event) {
    const field = event.target.name;
    const message = this.state.message;
    message[field] = event.target.value;
    return this.setState({message});
  }

  saveMessage(event) {
    event.preventDefault();
    this.props.actions.startUpdateMessage(this.state.message)

    this.setState({isEditing: !this.state.isEditing});
  }

  deleteMessage() {
    this.props.actions.startDeleteMessage(this.state.message.id)
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.message.id !== nextProps.message.id) {
      this.setState({message: nextProps.message});
    }
  }

  render() {
    const renderMessageButtons = () => {
      const activeUser = firebase.auth().currentUser;
      if(activeUser) {
        if (this.state.message.userId === activeUser.uid) {
          return (
            <div style={{display: 'inline'}}>
              <button className="btn btn-primary" onClick={this.toggleEdit} style={{marginRight: 5}}>Edit</button>
              <button className="btn btn-danger" onClick={this.deleteMessage}>Delete</button>
            </div>
          )
        }
      }
    }

    const renderAuthor = () => {
      const {message, users} = this.props;
      let author = '';
      if (users.length > 0) {
        author = {...users.find(user => user.uid === message.userId)}
      }
      return <i style={{display: 'inline', float: 'right', marginTop: 10}}>Post by: {author.displayName}</i>
    }

    if (this.state.isEditing) {
      return (
        <div>
          <h2>Edit Message</h2>
          <MessageForm
            message={this.state.message}
            onSave={this.saveMessage}
            onChange={this.updateMessageState}
          />
        </div>
      )
    }

    return (
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h4 style={{display: 'inline-block'}} >{this.props.message.subject}</h4>
            {renderAuthor()}
          </div>
          <div className="panel-body">
            {this.props.message.body}
          </div>
          <div className="panel-footer" style={{backgroundColor: '#dff0d8', color: '#3c763d'}}>
            <div className="text-right">this is a test</div>
          </div>
        </div>
        <div className="text-right">{renderMessageButtons()}</div>
      </div>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let message = {id: '', subject: '', body: ''};
  const messageId = ownProps.params.id;
  if (state.messages.length > 0) {
    message = Object.assign({}, state.messages.find(message => message.id === messageId))
  }
  return {
    message,
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
