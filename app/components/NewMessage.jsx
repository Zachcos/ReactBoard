import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions';
import MessageForm from 'MessageForm';


class NewMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        subject: '',
        body: ''
      }
    };

    // this.redirect = this.redirect.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
  }

  updateMessageState(event) {
    const field = event.target.name;
    const message = this.state.message;
    message[field] = event.target.value;
    return this.setState({message})
  }

  saveMessage(event) {
    event.preventDefault();
    this.props.actions.createMessage(this.state.message);
  }

  render() {
    return (
      <div>
        <h2>New Message</h2>
        <MessageForm
          message={this.state.message}
          onSave={this.saveMessage}
          onChange={this.updateMessageState} />
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);
