import React from "react";

function TodoList(props){
    console.log(props.todoList);
  return  <div>
      <p>Todo List</p>
      <ul type="i">
       {props.todoList.map(item=>(
           <li>{item}</li>
       ))}
      </ul>
    </div>
}
 export default TodoList;