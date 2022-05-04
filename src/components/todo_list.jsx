import React from "react";

function TodoList(props){
  return  <div>
      <p>Todo List</p>
      <ul >
       {props.todoList.map(item=>( 
          <>
          {item.index}.    {item.title} 
         <input type="checkbox" checked={item.status==="True"}></input>
         <br/>   </>       
          ))}
      </ul>
    </div>
}
 export default TodoList;