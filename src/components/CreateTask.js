import React, {useState} from 'react'

const CreateTask = () => {
    const [addTodo, setAddTodo] = useState({
        id: "",
        tasks: "",
        due: "",
        complete: false
    });

    const handleChange = (event) => {
        setAddTodo({ ...addTodo, [event.target.name]: event.target.value });
    };

  return (
    <form id="formStyle">
        {/* create an input element */}
          <input type="text" name="tasks" placeholder="task to add" onChange={handleChange}/>
          <input type="text" name="due" placeholder="due date of task" onChange={handleChange}/>
          <button id='add-button'>Add Task</button>
    </form>
  )
}

export default CreateTask