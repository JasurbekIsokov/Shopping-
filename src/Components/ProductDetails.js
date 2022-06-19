import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import { selectProduct } from "../Services/Actions/Actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
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
    if (productId && productId !== "") axiosProductDetail();
  }, [productId]);

  return (
    <div>
      <Header />
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add To Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
