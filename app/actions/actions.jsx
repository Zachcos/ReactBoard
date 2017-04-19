import firebase, {firebaseRef} from 'app/firebase';

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  }
}

export const startUpdateMessage = (message) => {
  return (dispatch) => {
    const updates = {
      subject: message.subject,
      body: message.body
    };
    const MessageRef = firebaseRef.child(`messages/${message.id}`).update(updates);
    return MessageRef.then(() => {
      dispatch(updateMessage({
        ...updates,
        id: message.id
      }))
    })
  }
}

export const createMessage = (message) => {
  return {
    type: 'CREATE_MESSAGE',
    message
  };
};

export const startCreateMessage = (message) => {
  return (dispatch) => {
    const MessageRef = firebaseRef.child('messages').push(message);
    return MessageRef.then(() => {
      dispatch(createMessage({
        ...message,
        id: MessageRef.key
      }))
    })
  };
};

export const deleteMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id
  };
};

export const startDeleteMessage = (id) => {
  return (dispatch) => {
    const MessageRef = firebaseRef.child(`messages/${id}`).remove();
    return MessageRef.then(() => {
      dispatch(deleteMessage(id));
    })
  }
}

export const addMessages = (messages) => {
  return {
    type: 'ADD_MESSAGES',
    messages
  };
};

export const startAddMessages = () => {
  return (dispatch, getState) => {
    const messagesRef = firebaseRef.child('messages');

    return messagesRef.once('value').then((snapshot) => {
      const messages = snapshot.val() || {};
      let parsedMessages = [];

      Object.keys(messages).forEach((messageId) => {
        parsedMessages.push({
          id: messageId,
          ...messages[messageId]
        });
      });

      dispatch(addMessages(parsedMessages));
    })
  };
};
