import React from 'react'

const DeleteTask = ({todo, todoList, setTodoList}) => {

    function deleteTask(){
        console.log("Deleted", todo)

        fetch("http://localhost:3000/list/" + todo.id, {
          method: "DELETE",
          })
          .then(setTodoList(todoList.filter(task => task !== todo))) //sets state without the deleted task
          .then(function(){
              if(todoList.length==1){
                  console.log("table turned invisible")
                  document.querySelector(".task-table").style.visibility = "hidden";
              }
          })
    }
    
    return (
        <button className="btn-delete" onClick={deleteTask}>
            Remove
        </button>
    );
}

export default DeleteTask