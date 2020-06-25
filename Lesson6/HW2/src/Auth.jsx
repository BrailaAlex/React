import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      spinner: false
    };
  }

  showLogout = () => {
    this.setState({
      spinner: true,
      isLogin: false
    });
    setTimeout(() => {
      this.setState({
        spinner: false
      });
    }, 2000);
  };

  hideLogout = () => {
    this.setState({
      isLogin: true,
      spinner: false
    });
  };

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Login onlogin={this.showLogout} />
        ) : (
          <Logout onlogout={this.hideLogout} />
        )}
        {this.state.spinner && <Spinner size={25} />}
      </>
    );
  }
}
export default Auth;