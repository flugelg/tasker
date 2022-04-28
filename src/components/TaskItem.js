import React from 'react'

const TaskItem = ({todo}) => {
  const {tasks, due, complete} = todo;

  return (
    <tr>
      <td id="task" className={todo.complete ? "strike" : ""}>{tasks}</td>
      <td id="due" className={todo.complete ? "strike" : ""}>{due}</td>
      <td>
        <input id="completeCheck" type="checkbox"/>
      </td>
      <td>
        <button className="btn btn-delete">
          <span className="mdi mdi-delete mdi-24px"></span>
          <span className="mdi mdi-delete-empty mdi-24px"></span>
          <span>Delete</span>
        </button>
      </td>
    </tr>
  )
}

export default TaskItem