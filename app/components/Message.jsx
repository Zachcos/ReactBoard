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
            <div>
              <button className="btn btn-primary" onClick={this.toggleEdit} style={{marginRight: 5}}>Edit</button>
              <button className="btn btn-danger" onClick={this.deleteMessage}>Delete</button>
            </div>
          )
        }
      }
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
        <h3>{this.props.message.subject}</h3>
        <p>{this.props.message.body}</p>
        <hr />
        <p>This message's id is: {this.props.message.id}</p>
        {renderMessageButtons()}
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
    message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
