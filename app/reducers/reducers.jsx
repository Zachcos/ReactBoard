import {hashHistory} from 'react-router';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGES':
      return action.messages;
    case 'UPDATE_MESSAGE':
      return [
        ...state.filter(message => message.id !== action.message.id),
        action.message
      ];
    case 'CREATE_MESSAGE':
      hashHistory.push(`/messages/${action.message.id}`)
      return [
        ...state,
        action.message
      ];
    case 'DELETE_MESSAGE':
      hashHistory.push('/messages');
      return [
        ...state.filter(message => message.id !== action.id)
      ]
    default:
      return state;
  }
}

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.users;
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    default:
      return state;
  }
}
