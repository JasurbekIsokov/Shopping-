import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import { selectProduct } from "../Services/Actions/Actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  // console.log(productId);

  const axiosProductDetail = async () => {
    try {
      const responce = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(responce.data);
      dispatch(selectProduct(responce.data));
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    axiosProductDetail();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>ProductDetails</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
