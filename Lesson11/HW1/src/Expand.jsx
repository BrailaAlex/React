import React from "react";
import PropTypes from "prop-types";

const Expand = ({ isOpen, children, title, onClose }) => {
  let content;
  if (isOpen) {
    content = <div className="expand__content">{children}</div>
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i class="fas fa-chevron-up">{isOpen ? '∧' : '∨'}</i>
        </button>
      </div>
      {content}
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

Expand.defaultProps = {
  isOpen: false,
  title: ""
};

export default Expand;