import "./App.css";
// import Home from "./components/home";
import Error404 from "./components/404";
// import Page1 from "./components/page1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GrandChild from "./components/grandchild";
import ProductDetails from "./components/productDetails";
import LoginPage from "./components/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<GrandChild />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<GrandChild />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
