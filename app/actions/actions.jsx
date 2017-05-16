import firebase, {firebaseRef} from 'app/firebase';
import {hashHistory} from 'react-router';

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
      body: message.body,
      category: message.category,
      created: message.created
    };
    const MessageRef = firebaseRef.child(`messages/${message.id}`).update(updates);
    return MessageRef.then(() => {
      dispatch(updateMessage({
        ...updates,
        id: message.id,
        userId: message.userId
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







export const startUserLogin = (user) => {
  return (dispatch, getState) => {
    const {email, password} = user;
    const LoginRef = firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      console.log('errorCode: ', error);
      console.log('errorMessage: ', message);
    });

    return LoginRef.then(() => {
      hashHistory.push('/messages')
    })
  }
}

export const userLogout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out successfully')
    }, (error) => {
      console.log('An error occurred', error)
    })
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const startAddUser = (user) => {
  return (dispatch, getState) => {
    const {username, displayName, email, password} = user;
    const UserRef = firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return UserRef.then(() => {
      const updateUser = firebase.auth().currentUser.updateProfile({
        displayName
      }).then(() => {
        const uid = firebase.auth().currentUser.uid;
        const newUser = {
          displayName,
          username,
          email,
          uid
        };
        const NewUserRef = firebaseRef.child('users').push(newUser);
        dispatch(addUser(newUser));
      });
    });
  }
};

export const addUsers = (users) => {
  return {
    type: 'ADD_USERS',
    users
  };
};

export const startAddUsers = () => {
  return (dispatch, getState) => {
    const usersRef = firebaseRef.child('users');

    return usersRef.once('value').then((snapshot) => {
      const users = snapshot.val() || {};
      const parsedUsers = [];

      Object.keys(users).forEach((userId) => {
        parsedUsers.push({
          id: userId,
          ...users[userId]
        });
      });

      dispatch(addUsers(parsedUsers));
    })
  };
};
