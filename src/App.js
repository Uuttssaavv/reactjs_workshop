import "./App.css";
import CreateComponent from "./components/create_component";
import TodoList from "./components/todo_list";
import { useState } from "react";

function App() {
  const [list, addTodo] = useState([]);
  function handleClick(e) {
    list.push(e);
    addTodo(list);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App</p>
        <CreateComponent onClick={(e) => handleClick(e)} />
        <TodoList todoList={list} />
      </header>
    </div>
  );
}

export default App;
