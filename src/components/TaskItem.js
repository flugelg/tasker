import React, { useState } from 'react';
import DeleteTask from './DeleteTask';

const TaskItem = ({handleDelete, todo}) => {
  const [taskComplete, setTaskComplete] = useState();
  const {tasks, due, complete} = todo; //deconstructs task. takes keys from object and assigns them as variables

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

    fetch(`http://localhost:3000/list/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo),
      })
      .then(res => res.json())
  }

  return (
    <tr className='task-row'>
      <td>
        <input id="completeCheck" type="checkbox" onChange={handleClick} defaultChecked={complete}/> {/* defaultChecked keeps marked when refreshed*/}
      </td>
      <td id="task" className={todo.complete ? "strike" : ""}>{tasks}</td>{/* if the task is complete put classname as strike, if its not complete have no class name */}
      <td id="due" className={todo.complete ? "strike" : ""}>{due}</td>
      <td>
          <DeleteTask handleDelete={handleDelete} todo={todo}/>
      </td>
    </tr>
  )
}

export default TaskItem