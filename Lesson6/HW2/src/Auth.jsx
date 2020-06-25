import React from "react";
import Logout from "./Logout";
import Login from "./Login";
import Spinner from "./Spinner";


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoggedIn: false,
    turnSpinner: false
  }
  }
  

  handleLogin = () => {
    this.setState({
      turnSpinner: true
      })
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        turnSpinner: false
      })
    }, 2000);
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: false
      })
  }

  render() {

    return (
      <>
        {
          this.state.isLoggedIn
            ? !this.state.turnSpinner &&
            <Logout onlogout={this.handleLogout} />
            : !this.state.turnSpinner &&
            <Login onlogin={this.handleLogin} />
        }
        {this.state.turnSpinner && <Spinner size={40} />}
        </>
    );
  }
}
export default Auth;