import React from 'react';
import { mount } from 'enzyme';
import GuestGreeting from '../GuestGreeting';

describe('GuestGreeting', () => {
  it('should display guest greeting', () => {
    const wrappedComponent = mount(<GuestGreeting />)
    expect(wrappedComponent).toMatchSnapshot();
  });
  
});