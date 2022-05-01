import React from 'react'

const DeleteTask = ({todo, todoList, setTodoList}) => {

    function deleteTask(){
        console.log("deleted", todo)

        fetch("http://localhost:3000/list/" + todo.id, {
          method: "DELETE",
          })
          .then(setTodoList(todoList.filter(task => task !== todo))) //sets state without the deleted task
    }
    
    return (
        <button className="btn btn-delete" onClick={deleteTask}>
            <span>Remove</span>
        </button>
    );
}

export default DeleteTask