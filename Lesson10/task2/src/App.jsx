import React, { Component } from 'react';
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class Page extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford'
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    })
  }
  render() {
    const { firstName, lastName } = this.state.userData; 
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName}`}</h1>
        <main className="content">
          <ShoppingCart userName={this.state.userData.firstName} />
          <Profile userData={this.state.userData}
            handleChange={this.handleChange}
          />
        </main>
      </div>
    )
  }
};

export default Page;