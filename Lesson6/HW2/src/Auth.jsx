import React from "react";
import Online from "./Login";
import Offline from "./Logout";


class Auth extends React.Component {
  state = {
    isLoggedIn: true
  }

  onLogin = () => {
      this.setState({
      isLoggedIn: true
      })
  }
  onLogout = () => {
      this.setState({
      isLoggedIn: false
      })
  }

  render() {
    return (
      !this.state.isOnline
      ? <Offline login={this.onLog} />
      : <Online />
    );
  }
}

export default Auth;