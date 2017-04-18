import uuid from 'uuid';

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