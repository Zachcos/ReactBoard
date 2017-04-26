import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Home from 'Home';

describe('Component: Home', () => {
  const wrapper = shallow(<Home />);

  it('should render', ()=> {
    expect(wrapper).toExist();
  });

  it('should render a header', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render a paragraph', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
});
