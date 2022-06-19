import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

// import Header from "./Components/Header.js";
import NotFound from "./Components/NotFound.js";
import ProductList from "./Components/ProductList.js";
import ProductDetails from "./Components/ProductDetails.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
