import { useSelector } from "react-redux/es/exports";
import Header from "./Header";

import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const product = useSelector((state) => state);
  console.log(product);
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
