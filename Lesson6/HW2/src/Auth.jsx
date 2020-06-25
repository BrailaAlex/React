import React from "react";
import Logout from "./Logout";
import Login from "./Login";
import Spinner from "./Spinner";


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoggedIn: true,
    turnSpinner: false
  }
  }
  

  handleLogin = () => {
    this.setState({
      turnSpinner: true
      })
    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        turnSpinner: false
      })
    }, 2000);
  }

  handleLogout = () => {
      this.setState({
      isLoggedIn: true
      })
  }

  render() {

    return (
      <>
        {
          !this.state.isLoggedIn
            ? <Logout onlogout={this.handleLogout} />
            : !this.state.turnSpinner &&
            <Login onlogin={this.handleLogin} />
        }
        {this.state.turnSpinner && <Spinner size={40} />}
        </>
    );
  }
}
export default Auth;