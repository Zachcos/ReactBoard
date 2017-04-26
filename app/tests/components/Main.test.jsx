import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';

import Main from 'Main';
import Navigation from 'Navigation'
import Home from 'Home';

describe('Component: Main', () => {
  const wrapper = shallow(<Main><Home /></Main>);

  it('should render', () => {
    expect(wrapper).toExist();
  })

  it('should render <Navigation /> component', () => {
    expect(wrapper.find(Navigation)).toExist();
  })

  it('should render <Home /> as child', () => {
    expect(wrapper.find(Home)).toExist();
  })
})
