import React from 'react'

const CreateTask = () => {
  return (
    <form id="formStyle">
        {/* create an input element */}
          <input type="text" name="tasks" placeholder="task to add"/>
          <input type="text" name="due" placeholder="due date of task"/>
          <button id='add-button'>Add Task</button>
    </form>
  )
}

export default CreateTask