import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });

function App() {
  const [remainingTasks, setRemainingTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(deletedTask) {
    const remainder = remainingTasks.filter(
      (task) => task.text !== deletedTask.target.value
    );
    setRemainingTasks(remainder);
  }

  const filteredTasks = remainingTasks.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });

  // function filterByButton(e){
  // setSelectedCategory(e.target.value)
  // setRemainingTasks(filteredTasks)
  // }

  function handleNewSubmit(newTask) {
    const newItem = [...remainingTasks, newTask];
    setRemainingTasks(newItem);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm tasks={remainingTasks} onTaskFormSubmit={handleNewSubmit} />
      <TaskList onDelete={handleDelete} tasks={filteredTasks} />
    </div>
  );
}

export default App;
//, {useState}
