import React from "react";
import Task from "./Task"


function TaskList({tasks, onDelete}) {

  const ListOfTasks = tasks.map(task => <Task 
    onDelete={onDelete} 
    key={task.text} 
    text={task.text} 
    category={task.category}
  />)

  return (
    <div className="tasks">
      {ListOfTasks}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
//  