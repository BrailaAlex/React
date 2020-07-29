import React from 'react';
import { shallow } from 'enzyme';
import Messages from '../Messages';

describe('Messages', () => {
  it('should render accepted text', () => {
    const message = "Hello bunny!";
    const wrappedComponent = shallow(<Messages text={message} />)
    expect(wrappedComponent.find('.message').text()).toEqual("Hello bunny!")
  });
  it('should render component if there is no text prop', () => {
    const wrappedComponent = shallow(<Messages />)
    expect(wrappedComponent.find('.message').exists()).toEqual(false);
  })
});