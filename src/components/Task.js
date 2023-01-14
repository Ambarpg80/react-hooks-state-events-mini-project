import React from "react";

function Task({text , category, onDelete}) {
  return (
    <div className="task">
      <div className="label" value={category}>{category}</div>
      <div className="text" value={text}> {text}</div>
      <button className="delete" value={text} onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
