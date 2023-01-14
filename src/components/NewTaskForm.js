import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {

  const [newInput, setNewInput] = useState("");
  const [newCategory, setNewCategory] = useState("All")


function handleNewInput(e){setNewInput(e.target.value)}
function handleCategory(e){setNewCategory(e.target.value)}


const newTask={text : newInput,
               category : newCategory,
              }
    

  return (
    <form className="new-task-form" onSubmit={(e) => {
          e.preventDefault();
          onTaskFormSubmit(newTask)} 
        }
        >
      <label>
        Details
        <input type="text" name="text" value={newInput} onChange={handleNewInput}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
