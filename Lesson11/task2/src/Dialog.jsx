import React from "react";

const UserMenu = ({ children, title, onClose, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  console.log(children);
  return (
    <div className="dialog">
    <div className="dialog__heading">
      <h4 className="dialog__title">{title}</h4>
        <button
          onClick = {onClose}
          className="dialog__close-btn">+</button>
    </div>
    <div className="dialog__content">
      {children}
    </div>
  </div>
  )
}

export default UserMenu;