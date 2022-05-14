import React, {useEffect, useState} from 'react';
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

const TaskList = () => {
  const[todoList, setTodoList] = useState([]); //whatever argument is in useState() is the initial state. Initial state only used on first render
  //states variable is todoList and setter function is setTodoList. Whatever value is passed into setTodoList cahnges the todoList varible to it.
  useEffect(() =>{ //useEffect adds ability to perform side effects. side effect is any other effect from an action we take.
    fetch('http://localhost:3000/list')
      .then(res => res.json()) //parsing from json to js object
      .then(data => setTodoList(data)) //using the parsed data and setting the state of todoList
  }, []); //dependancy is [], whatever is inside the useEffect is dependent on that. so if the rependency chances the useEffect function will run. So its a side effect of changing that dependency

  const handleDelete = (deletedTask) => {
    console.log("Deleted", deletedTask)
    setTodoList(todoList.filter(task => task !== deletedTask))
  }

  const handleCreateTask = (newTask) => {
    console.log("Added", newTask)
    setTodoList([...todoList, newTask])
  }

  const displayTodo = todoList.map((todo) =>{//rename
    return <TaskItem handleDelete= {handleDelete} key={todo.id} todo={todo}/>
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
      <CreateTask handleCreateTask={handleCreateTask}/> {/*props down to child component */}
    </div>
  )
}

export default TaskList