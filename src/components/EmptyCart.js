import React from "react";
import { Link } from "react-router-dom";
import emptyCartImage from "./Assets/empty.jpg";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img src={emptyCartImage} alt="Empty Cart" />{" "}
      <p>Oops!! Your cart seems to be empty.</p>
      <Link to="/shop">
        <button className="shop-button">Let's do some shopping</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
