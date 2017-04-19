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
