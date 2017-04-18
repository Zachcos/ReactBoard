import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      message: this.props.message
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
  }

  updateMessageState(event) {
    const field = event.target.name;
    const message = this.state.message;
    message[field] = event.target.value;
    return this.setState({messsage});
  }

  saveMessage(event) {
    event.preventDefault();
    this.props.actions.updateMessage(this.state.message)
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
    const {message} = this.props;

    if (this.state.isEditing) {
      return (
        <div>
          <h2>Edit Message</h2>
        </div>
      )
    }

    return (
      <div>
        <h3>{message.subject}</h3>
        <p>{message.body}</p>
        <hr />
        <p>This message's id is: {message.id}</p>
        <button className="btn btn-primary" onClick={this.toggleEdit}>Edit</button>
      </div>
    )
  }
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
