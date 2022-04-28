import React, {useEffect, useState} from 'react';
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

const TaskList = () => {
  const[todoList, setTodoList] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(data => setTodoList(data))
  }, []);

  const displayTodo = todoList.map((todo) =>{
    return <TaskItem key={todo.id} todo={todo}/>
  })

  return (
    <div>
      <table className="task-table">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Due Date</th>
            <th scope="col">Complete</th>
          </tr>
        </thead>
        <tbody>
          {
            displayTodo
          }
        </tbody>
      </table>
      <CreateTask/>
    </div>
  )
}

export default TaskList