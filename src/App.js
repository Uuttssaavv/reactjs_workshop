import "./App.css";
// import Home from "./components/home";
// import Error404 from "./components/404";
// import Page1 from "./components/page1";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./components/parent";
import { AppContext } from "./appContext";

function App() {
  const AppName = "THis is appname";
  return (
    <AppContext.Provider value={{ AppName }}>
      <div className="App">
        <h2>Parent content below app.js</h2>
        <Parent />
      </div>
    </AppContext.Provider>
  );
}

export default App;
