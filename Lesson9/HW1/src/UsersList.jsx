import React, { Component } from 'react';
import User from "./User"
import Filter from "./Filter"

class UsersList extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value);
  }

  render() {
    const users = this.props.users;
    console.log(users);
    const resultUsersList = (this.state.value === '')
      ? users.map(
        user => <User key={user.id}
          name={user.name}
          age={user.age} />
      )
      : users.filter(user => user.name.includes(this.state.value))
              .map(
                  user => <User key={user.id}
                    name={user.name}
                  age={user.age} />
              )
      
    return (
      <>
        <Filter
          filterText={this.state.value}
          count={users.lengt}
          onChange={this.handleChange}
        />
        <ul class="users">
          {resultUsersList}
        </ul>
      </>
    );
  }
}

export default UsersList;