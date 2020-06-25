import React from "react";

const Logout = ({ onlogout }) => {
  return (
    <button
      onClick={onlogout}
      className="logout btn"
    >Logout</button>
  );
}

export default Logout;