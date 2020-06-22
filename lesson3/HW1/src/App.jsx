import React from 'react';
import Greeting from './Greeting';

// const userInfo = {
//   firstName: "John",
//   lastName: "Doe",
//   birthDate: new Date('2019-06-22T11:11:11.819Z')
// };

const App = () => {
  return (
    <Greeting
      firstName = 'John'
      lastName = 'Doe'
      birthDate =  {new Date('2000-01-01')}
    />
  )
}

export default App;
 


