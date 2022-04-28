import React, {useEffect, useState} from 'react';

const TaskList = () => {

  useEffect(() =>{
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);


  return (
    <div>TaskList</div>
  )
}

export default TaskList