import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {
  const renderList = () => {

    if (messages.length === 0) {
      return (
        <li className="list-group-item">
          No messages to display
        </li>
      )
    }

    return messages.map(message => {
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

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;
