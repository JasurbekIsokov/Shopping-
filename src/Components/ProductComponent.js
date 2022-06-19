import { useSelector } from "react-redux/es/exports";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProduct.product);
  // console.log(products);
  const renderProductListHtml = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id} id={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderProductListHtml}</>;
};

export default ProductComponent;
