import React from 'react';
import {connect} from 'react-redux';

import MessageList from 'MessageList';

class MessageBoardApp extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
        <h1>Messages</h1>
        <div className="col-sm-4">
          <MessageList messages={this.props.messages} />
        </div>
        <div className="col-sm-8">
          {this.props.children}
        </div>
      </div>
    )
  };
};

export default connect((state) => state)(MessageBoardApp);
