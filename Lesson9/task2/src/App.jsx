import React, { Component } from 'react';
import UserForm from './UserForm.jsx'

class App extends Component {
  
  createUser(userArr) {
    event.preventDefault();
    console.log(userArr);
  };

  render() {
  return (
    <UserForm handleSubmit={this.createUser} />
  )
} 
}

export default App;