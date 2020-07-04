import React from "react";
import PropTypes from "prop-types";
// import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Expand = ({ isOpen, children, title, onClose }) => {
  let content;
  let arrowDirection = "down";
  if (isOpen) {
    content = <div className="expand__content">{children}</div>;
    arrowDirection = "up";
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          {/* <FontAwesomeIcon icon={faChevronUp} /> */}
          <i className={`fa-chevron-${arrowDirection}`} />
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