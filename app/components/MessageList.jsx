import React from 'react';
import {Link} from 'react-router';

import Message from 'Message';

const MessageList = ({ messages }) => {
  const renderList = () => {
    return messages.map((message) => {
      return (
        <li key={message.id} className="list-group-item">
          <Link to={`messages/${message.id}`}>
            {message.subject}
          </Link>
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
