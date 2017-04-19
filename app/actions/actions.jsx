import uuid from 'uuid';
import firebase, {firebaseRef} from 'app/firebase';

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  }
}

export const createMessage = (message) => {
  return {
    type: 'CREATE_MESSAGE',
    id: uuid(),
    message
  }
}

export const deleteMessage = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id
  }
}

export const addMessages = (messages) => {
  return {
    type: 'ADD_MESSAGES',
    messages
  }
}

export const startAddMessages = () => {
  return (dispatch, getState) => {
    var messagesRef = firebaseRef.child('messages');

    return messagesRef.once('value').then((snapshot) => {
      var messages = snapshot.val() || {};
      var parsedMessages = [];

      Object.keys(messages).forEach((messageId) => {
        parsedMessages.push({
          id: messageId,
          ...message[messageId]
        });
      });

      dispatch(addMessages(parsedMessages));
    })
  }
}
