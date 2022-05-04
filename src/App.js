import "./App.css";
import CreateComponent from "./components/create_component";
import TodoList from "./components/todo_list";
import { useState } from "react";

function App() {
  const [todoList, addTodo] = useState([]);
  function handleClick(e) {
    addTodo((oldArray) => [
      {
        title: e,
        status: todoList.length % 2 === 0 ? "False" : "True",
        index: todoList.length + 1,
      },
      ...oldArray,
    ]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App</p>
        <CreateComponent onClick={(e) => handleClick(e)} />
        <TodoList todoList={todoList} />
      </header>
    </div>
  );
}

export default App;
