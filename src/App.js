import "./App.css";
import CreateComponent from "./components/create_component";
import TodoList from "./components/todo_list";
import { useEffect, useState } from "react";

function App() {
  var list = JSON.parse(localStorage.getItem("Todol"));
  const [todoList, addTodo] = useState(list ?? []);

  useEffect(() => {
    localStorage.setItem("Todol", JSON.stringify(todoList));
  }, [todoList]);
  function handleClick(e) {
    let element = {
      title: e,
      status: todoList.length % 2 === 0 ? "False" : "True",
      index: todoList.length + 1,
    };
    addTodo([...todoList, element]);
  }
  function toggleStatus(id) {
    for (const item of todoList) {
      if (item.id === id) {
        item.status = item.status === "True" ? "False" : "True";
      }
    }
    // localStorage.setItem("Todol", JSON.stringify(todoList));
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App</p>
        <CreateComponent onClick={(e) => handleClick(e)} />
        <TodoList todoList={todoList} toggle={toggleStatus} />
      </header>
    </div>
  );
}

export default App;
