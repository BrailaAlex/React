import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({id, done, text, onToggleTask, onDelete}) => {
  return (
    <li className={classNames('list-item', {'list-item_done' : done})}>
      <input
        onClick={() => onToggleTask(id)}
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox" />
      <span className="list-item__text">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="list-item__delete-btn" />
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool,
  text: PropTypes.string,
  onToggleTask: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

Task.defaultProps = {
  done: false,
  text: ''
}

export default Task;