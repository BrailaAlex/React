import React from "react";

class User extends React.Component {
  state = {
    avatarUrl: null,
    name: null,
    location: null,
  }

  componentDidMount() {
    debugger;
    this.fetchUserInfo(this.props.match.params.userId)
  }

  componentDidUpdate(prevProp) {
    debugger;
    if (this.props.match.params.userId !== prevProp.match.params.userId) {
      this.fetchUserInfo(this.props.match.params.userId);
    }
  }

  fetchUserInfo = (userData) => {
    debugger;
    fetch(`https://api.github.com/users/${userData}`)
      .then(response => response.json())
      .then(userInfo => {
        return this.setState({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        });
      });
  }
  render() {
    console.log(this.state)
    debugger;
    const { avatarUrl, name, location } = this.state;
    if (!avatarUrl || !name || !location) {
      return null
    }
      return (
        <div className="user">
          <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
          <div className="user__info">
            <span className="user__name">{name}</span>
            <span className="user__location">{location}</span>
          </div>
        </div>
      );
  }
};

export default User;