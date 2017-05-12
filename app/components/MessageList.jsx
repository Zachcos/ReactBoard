import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const MessageList = ({ messages, searchText, currentCategory }) => {

  const isCatFilter = (currentCategory) => (message) => {
    if (currentCategory === message.category) {
      return message
    } else if (currentCategory === "ALL") {
      return message
    }
  }

  const isSearched = (searchText) => (message) => {
    return !searchText ||
    message.subject.toLowerCase().includes(searchText.toLowerCase());
  }


  const renderList = () => {
    if (messages.length === 0) {
      return (
        <li className="list-group-item">
          No messages to display
        </li>
      )
    }

    // return messages.filter(isSearched(searchText)).map(message => {
    return messages.filter(isCatFilter(currentCategory)).filter(isSearched(searchText)).map(message => {
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
  messages: PropTypes.array.isRequired,
  searchText: PropTypes.string
}

export default MessageList;
