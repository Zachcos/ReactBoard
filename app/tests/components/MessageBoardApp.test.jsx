import React from 'react';
import expect from 'expect';
import {Link} from 'react-router';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {configure} from 'configureStore';

import MessageBoardApp from 'MessageBoardApp';
import MessageList from 'MessageList';

describe('Component: MessageBoardApp', () => {
  const store = configure();
  const wrapper = mount(
    <Provider store={store}>
      <MessageBoardApp />
    </Provider>
  );

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should render new message button', () => {
    expect(wrapper.find('Link').text()).toBe('+ message');
  });

  it('should render <MessageList /> component', () => {
    expect(wrapper.find(MessageList).length).toBe(1);
  });
});
