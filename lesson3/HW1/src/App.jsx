import React from 'react';
import Greeting from './Greeting';

const userInfo = {
  firstName: "John",
  lastName: "Doe",
  birthDate: new Date('2001-01-01T11:11:11.819Z')
};

const App = () => {
  return (
    <Greeting
      firstName = {userInfo.firstName}
      lastName = {userInfo.lastName}
      birthDate =  {userInfo.birthDate}
    />
  )
}

export default App;
 


