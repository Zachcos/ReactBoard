import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router';

import {Message} from 'Message';

describe('Component: Message', () => {
  const props = {
    message: {
      id: 1,
      subject: 'this is a test',
      body: 'this is the test body',
      userId: 123
    },
    users: [
      {
        id: 1,
        displayName: 'test',
        email: 'test@test.com',
        uid: 123,
        username: 'test_acc'
      }
    ]
  }

  const wrapper = mount(<Message {...props} />);

  it('should exist', () => {
    expect(wrapper).toExist()
  });

  it('should render <h4> with message subject', () => {
    expect(wrapper.find('h4').text()).toBe(props.message.subject)
  });

  it('should render <p> with the message body', () => {
    expect(wrapper.find('p').text()).toBe(props.message.body)
  });

  it('should render <i> with author name', () => {
    expect(wrapper.find('i').text()).toBe(`Post created by: ${props.users[0].displayName}`)
  })
});
