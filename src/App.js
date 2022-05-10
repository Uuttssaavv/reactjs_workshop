import "./App.css";
import Error404 from "./components/404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/login_view";

function App() {
  return (
    <div className="text-center h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
