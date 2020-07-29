import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe('User', () => {
  it("should render the given name property", () => {
    const wrappedComponent = shallow(<User name="Tom" />)
    expect(wrappedComponent.find('.user__name').text()).toEqual('Tom')
  });
  it("should render the given age property", () => {
    const wrappedComponent = shallow(<User age={17} />)
    expect(wrappedComponent.find('.user__age').text()).toEqual("17")
  });
})
