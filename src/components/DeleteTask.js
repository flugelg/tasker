import React from 'react'

const DeleteTask = ({todo, deleteTasks}) => {

    function deleteTask(){
        console.log("deleted", todo)
        fetch("http://localhost:3000/list/" + todo.id, {
          method: "DELETE",
          })
          .then(deleteTasks())
    }
    
    return (
        <button className="btn btn-delete" onClick={deleteTask}>
            <span>Remove</span>
        </button>
    );
}

export default DeleteTask