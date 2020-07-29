import React from 'react';
import { mount } from 'enzyme';
import UserGreeting from '../UserGreeting';

describe('UserGreeting', () => {
  it('should display user greeting', () => {
    const wrappedComponent = mount(<UserGreeting />)
    expect(wrappedComponent).toMatchSnapshot();
  });
  
});