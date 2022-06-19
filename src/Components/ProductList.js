import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "./Header";
import { getProducts } from "../Services/Actions/Actions";

import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductList = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProductsFunc = async () => {
    try {
      const responce = await axios.get("https://fakestoreapi.com/products");
      console.log(responce.data);
      dispatch(getProducts(responce.data));
    } catch (error) {
      console.log("Error :", error.message);
    }
  };

  useEffect(() => {
    getProductsFunc();
  }, []);

  return (
    <>
      <Header />
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductList;
