import React from "react";

const Logout = ({ onLogout }) => (
    // eslint-disable-next-line react/button-has-type
    <button className="logout btn" onClick={onLogout}>
        Logout
    </button>
);

export default Logout;