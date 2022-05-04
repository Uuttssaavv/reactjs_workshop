import "./App.css";
import Home from "./components/home";
import Error404 from "./components/404";
import Page1 from "./components/page1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Ecom App</p>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="*" element={<Error404 />} />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
