import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase';
import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate createMessage action', () => {
    const action = {
      type: 'CREATE_MESSAGE',
      message: {
        id: 1,
        subject: 'this is a test',
        body: 'this is the test body'
      }
    };
    const res = actions.createMessage(action.message);

    expect(res).toEqual(action);
  });
  
  it('should generate addMessages action', () => {
    const messages = [{
      id: 1,
      subject: 'message subject #1',
      body: 'message body #1'
    }, {
      id: 2,
      subject: 'messages subject #2',
      body: 'message body #2'
    }];
    const action = {
      type: 'ADD_MESSAGES',
      messages
    };

    const res = actions.addMessages(messages);

    expect(res).toEqual(action);
  });

  it('should generate deleteMessage action', () => {
    const action = {
      type: 'DELETE_MESSAGE',
      id: 123
    };

    const res = actions.deleteMessage(action.id);

    expect(res).toEqual(action);
  });

});
