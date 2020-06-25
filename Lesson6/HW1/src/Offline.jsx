import React from "react";

const Offline = ({ login }) => {
  console.log(login)
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button
        onClick={login}
        className="status__btn">Reconnect</button>
    </div>
  );
}

export default Offline;