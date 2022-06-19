import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProduct.product);
  // console.log(products);
  const renderProductListHtml = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id} id={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{ height: 550 }}>
              <div className="image">
                <img
                  src={image}
                  alt={title}
                  style={{ width: 280, height: 350 }}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderProductListHtml}</>;
};

export default ProductComponent;
