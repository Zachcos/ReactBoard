import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router';

import MessageList from 'MessageList';

describe('Component: MessageList', () => {
  const messages = [{
    id: 1,
    subject: 'this is a test',
    body: 'still a test'
  },
  {
    id: 2,
    subject: 'this is a test',
    body: 'still a test'
  }]
  const wrapper = shallow(<MessageList messages={messages}/>);

  it('should exist', () => {
    expect(wrapper).toExist();
  });

  it('should render <li> for each message passed in', () => {
    expect(wrapper.children().length).toBe(messages.length)
  });

  it('should render <Link> for each <li>', () => {
    expect(wrapper.find('Link').length).toBe(messages.length);
  });
});
