export const startAddMessages = (messages) => {
  return (dispatch, getState) => {
    const messages = getState();
    console.log('these are messages:', messages)
  }
}

export const addMessages = (messages) => {
  return {
    type: 'ADD_MESSSAGES',
    messages
  };
};
