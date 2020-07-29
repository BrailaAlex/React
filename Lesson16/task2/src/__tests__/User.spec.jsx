import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';
import { getUserData } from '../userGateway';

jest.mock('../userGateway', () => {
  return {
    getUserData: jest.fn(() => Promise.resolve())
  }
});

describe('User', () => {
  it('should not render user if no data', () => {
    const wrappedComponent = shallow(<User />);
    expect(wrappedComponent.find('.user').exists()).toEqual(false)
  });

  it('should render user if data is received', () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        avatar_url: 'https://example.com',
        name: 'Jim',
        location: 'Planet Earth'
      }
    })
    expect(wrappedComponent.find('.user')).toMatchSnapshot();
  });
  it('should call imported function when component will be mounted', () => {
    shallow(<User />)
    expect(getUserData).toBeCalled();
  });
})