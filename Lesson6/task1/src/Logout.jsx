import React from 'react';

const Logout = ({onLogout}) => {
    return (
      <button onClick={onLogout}
        className="btn logout"
      >Login</button>
    )
}

export default Logout;


