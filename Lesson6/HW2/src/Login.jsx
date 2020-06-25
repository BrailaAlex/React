import React from "react";

const Login = ({onlogin}) => {
  return (
    <button
      className="login btn"
      onClick={onlogin}
    >Login</button>
  );
}

export default Login;