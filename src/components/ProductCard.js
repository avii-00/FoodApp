import React, { useState } from "react";
import { useCart } from "../CartContext";

const ProductCard = ({ imgSrc, name, prices }) => {
  const { addToCart } = useCart();
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ product: { imgSrc, name, prices }, size, quantity });
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const calculatePrice = () => {
    const price = prices[size];
    return price * quantity;
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <div className="size">
        <label>
          Size:
          <select value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="regular">Regular</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div className="quantity">
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </label>
      </div>
      <div className="price">Price: {calculatePrice()} /=</div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
