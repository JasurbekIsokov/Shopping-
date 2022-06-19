import { useSelector } from "react-redux/es/exports";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProduct.product);
  console.log(products);
  const { id, title, category } = products[0];
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
