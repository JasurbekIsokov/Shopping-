import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui pointing menu" style={{ padding: "5px 10px" }}>
      <Link to="/">
        <a className="active item">Shopping</a>
      </Link>
      <div className="right menu">
        <div className="ui vertical animated button" tabIndex="0">
          <div className="hidden content">Shop</div>
          <div className="visible content">
            <i className="shop icon" />
          </div>
        </div>
        <Link to="/login">
          <a className="item">Sign In</a>
        </Link>
        <Link to="/register">
          <a className="item">Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
