import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      <h3>{message.subject}</h3>
      <p>{message.body}</p>
    </div>
  )
}

export default Message;
