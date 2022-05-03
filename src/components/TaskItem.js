import React, { useState } from 'react'
import DeleteTask from './DeleteTask';

const TaskItem = ({todo, todoList, setTodoList}) => {
  const [taskComplete, setTaskComplete] = useState();
  const {tasks, due, complete} = todo; //deconstructs task

  function handleClick(){
    if(todo.complete == false){
      todo.complete = true;
    }
    else{
      todo.complete = false;
    }
    updateTask();
    setTaskComplete(todo.complete) //updates dom for if complete or not
  }

  function updateTask(){
    console.log(todo.complete ? "Complete" : "Incomplete", todo)

    let id = todo.id
    fetch(`http://localhost:3000/list/${id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo),
      })
      .then(res => res.json())
  }

  return (
    <tr>{/* if the task is complete put classname as strike, if its not complete have no class name */}
      <td>
        <input id="completeCheck" type="checkbox" onChange={handleClick} defaultChecked={complete}/> {/* defaultChecked keeps marked when refreshed*/}
      </td>
      <td id="task" className={todo.complete ? "strike" : ""}>{tasks}</td>
      <td id="due" className={todo.complete ? "strike" : ""}>{due}</td>
      <td>
          <DeleteTask todo={todo} todoList={todoList} setTodoList={setTodoList}/>
      </td>
    </tr>
  )
}

export default TaskItem