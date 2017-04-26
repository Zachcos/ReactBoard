import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
var configureStore = require('configureStore');
var {Provider} = require('react-redux');

import Main from 'Main';
import Navigation from 'Navigation'
import Home from 'Home';
import About from 'About';

describe('Component: Main', () => {
  var store = configureStore.configure();
  const wrapper = mount(
    <Provider store={store}>
      <Main>
        <Home />
        <About />
      </Main>
    </Provider>
  );

  it('should render', () => {
    expect(wrapper).toExist();
  })

  it('should render <Navigation /> component', () => {
    expect(wrapper.find(Navigation).length).toBe(1)
  })

  it('should render <Home /> as child', () => {
    expect(wrapper.find(Home).length).toBe(1);
  })

  it('should render <About /> as child', () => {
    expect(wrapper.find(About).length).toBe(1);
  })
})
