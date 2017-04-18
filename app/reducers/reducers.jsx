import {hashHistory} from 'react-router';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return [
        ...state.filter(message => message.id !== action.message.id),
        action.message
      ];
    default:
      return state;
  }
}
