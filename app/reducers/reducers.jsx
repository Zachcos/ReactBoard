import {hashHistory} from 'react-router';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGES':
    return action.messages
    default:
      return state;
  }
}
