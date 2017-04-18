import React from 'react';

const MessageList = ({ messages }) => {
  const renderList = () => {
    return messages.map((message) => {
      return (
        <li key={message.id} className="list-group-item">
          <h3>{message.subject}</h3>
          <p>{message.body}</p>
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
