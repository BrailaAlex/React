import React from 'react';
import { shallow } from 'enzyme';
import Auth from '../Auth';

describe('Auth', () => {
  it('should display Login button if User logged out', () => {
    const wrappedComponent = shallow(<Auth />);

    expect(wrappedComponent.find('Login').exists()).toBeTruthy();
  });
  it('should display Logout button if user logged in', () => {
    const wrappedComponent = shallow(<Auth isLoggedIn />);
    wrappedComponent.find('Login').prop('onLogin')();
    expect(wrappedComponent.find('Logout').exists()).toBeTruthy();
  });
  it('should set isLoggedIn true to Greeting', () => {
    const wrappedComponent = shallow(<Auth isLoggedIn />);
    wrappedComponent.find('Login').prop('onLogin')();
    expect(wrappedComponent.find('Greeting').prop('isLoggedIn')).toEqual(true);
  });
  it('should set isLoggedIn false to Greeting', () => {
    const wrappedComponent = shallow(<Auth isLoggedIn />);
    wrappedComponent.find('Login').prop('onLogin')();
    wrappedComponent.find('Logout').prop('onLogout')();
    expect(wrappedComponent.find('Greeting').prop('isLoggedIn')).toEqual(false);
  });
})
