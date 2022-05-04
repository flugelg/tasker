import React, {useState} from 'react'

const CreateTask = ({updateTasks, setTodoList, todoList}) => {
    const [newAdded, setNewAdded] = useState({})
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

        fetch("http://localhost:3000/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addTodo),
        })
        .then(res => res.json())
        .then(data => setTodoList([...todoList, data]))
        .then(setAddTodo({ //clearing input elements
            id: "",
            tasks: "",
            due: "",
            complete: false
            }))
        
        
        console.log("Added", addTodo)
        document.getElementById("tasks-input").focus(); //focusing on input elements after re-render 
    }

  return (
    <form id="formStyle" onSubmit={handleSubmit}>
        {/* create an input element */}
          <input  id="tasks-input" type="text" name="tasks" placeholder="task to add" value={addTodo.tasks} onChange={handleChange} autoFocus/>
          <input type="text" name="due" placeholder="due date of task" value={addTodo.due} onChange={handleChange}/>
          <button id='add-button'>Add Task</button>
    </form>
  )
}

export default CreateTask