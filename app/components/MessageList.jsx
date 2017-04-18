import React from 'react';

import Message from 'Message';

const MessageList = ({ messages }) => {
  const renderList = () => {
    return messages.map((message) => {
      return (
        <li key={message.id} className="list-group-item">
          <Message message={message} />
        </li>
      )
    })
  }

   return (
    <ul className="list-group">
      {renderList()}
    </ul>
  )
}

export default MessageList;
