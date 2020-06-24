import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: false,
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    // const button = this.state.isLoggedIn
    //   ? <button
    //     onClick={this.handleLogout}
    //     className="btn logout"
    //   >Logout</button>
    //   : <button
    //     onClick={this.handleLogin}
    //     className="btn login"
    //   >Login</button>;
    
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
          )}
      </div>
    );
  }
};

export default Auth;


