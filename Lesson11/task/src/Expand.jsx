import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

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
          {isOpen ? <FontAwesomeIcon icon={faChevronUp} />
           : <FontAwesomeIcon icon={faChevronDown} />}
        </button>
      </div>
      {content}
    </div>
  );
};

// Expand.propTypes = {
//   isOpen: PropTypes.bool,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
//   onToggleContent: PropTypes.func.isRequired
// };

// Expand.defaultProps = {
//   title: '',
//   isOpen: false
// }

export default Expand;