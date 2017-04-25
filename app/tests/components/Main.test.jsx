import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import Main from 'Main';

describe('Component: Main', () => {
  const wrapper = shallow(<Main />);

  it('should render', () => {
    expect(wrapper).toExist();
  })
})
