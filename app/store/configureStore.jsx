import * as redux from 'redux';
import thunk from 'redux-thunk';
import uuid from 'uuid';

import {messagesReducer} from 'reducers';

const initMessages = {
  messages: [
    {
      id: uuid(),
      subject: 'This is test message #1',
      body: 'This is the first message'
    },
    {
      id: uuid(),
      subject: 'This is test message #2',
      body: 'This is the second message'
    },
    {
      id: uuid(),
      subject: 'This is test message #3',
      body: 'This is the third message'
    },
  ]
}


export const configure = (initialState = initMessages) => {
  const reducer = redux.combineReducers({
    messages: messagesReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
