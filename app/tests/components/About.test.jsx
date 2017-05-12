import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import About from 'About';

describe('Component: About', () => {
  const wrapper = shallow(<About />);

  it('should render', () => {
    expect(wrapper).toExist();
  })

  it('should render header', () => {
    expect(wrapper.find('h2').length).toBe(1);
  })

  it('should render paragraph', () => {
    expect(wrapper.find('p').length).toBe(1);
  });
});
