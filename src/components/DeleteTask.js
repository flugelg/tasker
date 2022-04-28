import React from 'react'

const DeleteItem = ({todo}) => {

    function deleteTask(){
        console.log("deleted", todo)
        fetch("http://localhost:3000/list/" + todo.id, {
          method: "DELETE",
          })
    }
    
    return (
        <button className="btn btn-delete" onClick={deleteTask}>
            <span>Remove</span>
        </button>
    );
}

export default DeleteItem