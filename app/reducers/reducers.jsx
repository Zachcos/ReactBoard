import {hashHistory} from 'react-router';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return [
        ...state.filter(message => message.id !== action.message.id),
        action.message
      ];
    case 'CREATE_MESSAGE':
      hashHistory.push(`/messages/${action.id}`)
      return [
        ...state,
        {
          id: action.id,
          subject: action.message.subject,
          body: action.message.body
        }
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
