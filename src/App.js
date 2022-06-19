import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

// import Header from "./Components/Header.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import NotFound from "./Components/NotFound.js";
import ProductList from "./Components/ProductList.js";
import ProductDetails from "./Components/ProductDetails.js";
import "./Assets/Style/spinner.css";
import ResultSucces from "./Components/ResultSucces.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<ResultSucces />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
