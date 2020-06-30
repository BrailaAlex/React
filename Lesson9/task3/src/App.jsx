import React, { Component } from 'react';
import UserForm from './UserForm.jsx'

class App extends Component {

  createUser(userForm) {
    event.preventDefault();
    const formData = [...new FormData(userForm)]
      .reduce((acc, [name, value]) => ({ ...acc, [name]: value }), {});
    console.log(formData);
  };

  render() {
  return (
    <UserForm onSubmit={this.createUser} />
  )
} 
}

export default App;