import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jquery';

import MessageList from 'MessageList';
import Message from 'Message';

describe('MessageList', () => {
  it('should exist', () => {
    expect({MessageList}).toExist();
  });
});
