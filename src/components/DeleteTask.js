import React from 'react'

const DeleteTask = ({handleDelete,todo, todoList, setTodoList}) => {

    function deleteTask(){
        fetch("http://localhost:3000/list/" + todo.id, { //fetch returns a promise that resolves into a response object
          method: "DELETE",
          })
          .then(handleDelete(todo))
    }
    
    return (
        <button className="btn-delete" onClick={deleteTask}>
            Remove
        </button>
    );
}

export default DeleteTask