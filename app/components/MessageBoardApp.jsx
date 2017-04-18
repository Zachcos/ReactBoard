import React from 'react';
import uuid from 'uuid';

import MessageList from 'MessageList';

export class MessageBoardApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          id: uuid(),
          subject: 'This is test message #1',
          body: 'This is the first message'
        },
        {
          id: uuid(),
          subject: 'This is test message #2',
          body: 'This is the second message'
        },
        {
          id: uuid(),
          subject: 'This is test message #3',
          body: 'This is the third message'
        },
      ]
    }
  }
  render() {
    const {messages} = this.state;
    return <MessageList messages={messages} />
  };
};

export default MessageBoardApp;
