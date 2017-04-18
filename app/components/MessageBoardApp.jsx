import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';

import MessageList from 'MessageList';

export class MessageBoardApp extends React.Component {
  render() {
    const {messages} = this.props;
    return (
      <div className="col-sm-12">
        <h1>Messages</h1>
        <div className="col-sm-4">
          <MessageList messages={messages} />
        </div>
        <div className="col-sm-8">
          {this.props.children}
        </div>
      </div>
    )
  };
};

export default connect((state) => state)(MessageBoardApp);
