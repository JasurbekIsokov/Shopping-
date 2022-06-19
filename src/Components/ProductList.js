import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Spinner from "./Spinner";
import ProductComponent from "./ProductComponent";
import { getProducts } from "../Services/Actions/Actions";

const ProductList = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProductsFunc = async () => {
    try {
      const responce = await axios.get("https://fakestoreapi.com/products");
      // console.log(responce.data);
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
      {product.allProduct.product.length === 0 ? (
        <Spinner />
      ) : (
        <div className="ui grid container">
          <ProductComponent />
        </div>
      )}
    </>
  );
};

export default ProductList;
