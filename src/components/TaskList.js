import React, {useEffect, useState} from 'react';
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

const TaskList = () => {
  const[todoList, setTodoList] = useState([]); //setter function is setTodoList

  useEffect(() =>{
    fetch('http://localhost:3000/list')
      .then(res => res.json()) //parsing from json to js
      .then(data => setTodoList(data)) //using the parsed data and setting the state of todoList
  }, []); //dependancy is [], whatever is inside the useEffect is dependent on that.

  const displayTodo = todoList.map((todo) =>{
    return <TaskItem key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/> 
  })

  return (
    <div className='content'>
      <table className="task-table">
        <thead>
          <tr>
            <th scope="col">Complete</th>
            <th scope="col">Task</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {
            displayTodo
          }
        </tbody>
      </table>
      <CreateTask todoList={todoList} setTodoList={setTodoList}/> {/*props down to child component */}
    </div>
  )
}

export default TaskList