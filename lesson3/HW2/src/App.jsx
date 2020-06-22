import React from 'react';
import Profile from './Profile';

const userInfo = {
  firstName: "John",
  lastName: "Doe",
  birthDate: '1991-06-22T11:11:11.819Z',
  birthPlace: 'London'
};

const App = () => {
  return (
    <Profile
      userData = {userInfo}
    />
  )
}

export default App;
 


