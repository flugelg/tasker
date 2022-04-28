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

    const handleSubmit = e => {
        e.preventDefault();
        if(addTodo.tasks === ""){
        return console.log("Please add a task")
        };
        if( addTodo.due === ""){
            return console.log("Please add a due date")
        }
        console.log(addTodo);

        fetch("http://localhost:3000/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addTodo),
        })
        .then(res => res.json())
    }

  return (
    <form id="formStyle" onSubmit={handleSubmit}>
        {/* create an input element */}
          <input type="text" name="tasks" placeholder="task to add" onChange={handleChange}/>
          <input type="text" name="due" placeholder="due date of task" onChange={handleChange}/>
          <button id='add-button'>Add Task</button>
    </form>
  )
}

export default CreateTask