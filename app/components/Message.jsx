import React from 'react';
import {connect} from 'react-redux';

export class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: this.props.message
    };
  }

  render() {
    const {message} = this.props;
    return (
      <div>
        <h3>{message.subject}</h3>
        <p>{message.body}</p>
        <hr />
        <p>This message's id is: {message.id}</p>
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

export default connect(mapStateToProps)(Message);
