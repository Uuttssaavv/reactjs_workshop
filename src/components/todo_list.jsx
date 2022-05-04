import React from "react";

function TodoList(props){
    function onchanged(id){
        props.toggle(id);

    }
  return  <div>
      <p>Todo List</p>
      <ul >
       {props.todoList.map(item=>( 
          <h3 key={item.index}>
         {item.index}.    {item.title} 
          
         <input type="checkbox" checked={item.status==="True"} onChange={()=>onchanged(item.index)}></input>
    <br/>   </h3>       
          ))}
      </ul>
    </div>
}
 export default TodoList;