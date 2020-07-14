import React from "react";

class User extends React.Component {
  state = {
    avatarUrl: null,
    name: null,
    location: null,
  }

  componentDidMount() {
    this.fetchUserInfo(this.props.match.params.userId)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.match.params.userId !== this.props.match.params.userId
  }

  fetchUserInfo = (userData) => {
    return fetch(`https://api.github.com/users/${userData}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users info")
        };
        return response.json();
      })
      .then(userInfo => {
        this.setState({
          avatarUrl: userInfo.avatar_url,
          name: userInfo.name,
          location: userInfo.location,
        })
          .catch(error => alert(error));
      })
  }
  render() {
    const { avatarUrl, name, location } = this.state;
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