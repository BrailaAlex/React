import React from 'react';
import classNames from 'classnames';

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

export default Task;