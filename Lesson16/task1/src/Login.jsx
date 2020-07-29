import React from "react";

const Login = ({ onLogin }) => (
    // eslint-disable-next-line react/button-has-type
    <button className="login btn" onClick={onLogin}>
        Login
    </button>
);

export default Login;