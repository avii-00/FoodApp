import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useCart();

  // Function to handle quantity change
  const handleQuantityChange = (index, event) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = parseInt(event.target.value, 10);
    setCart(updatedCart);
  };

  // Function to calculate the total amount
  const totalAmount = cart.reduce((total, item) => {
    const price = item.product.prices[item.size];
    return total + price * item.quantity;
  }, 0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <h2>Items</h2>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.product.imgSrc} alt={item.product.name} />
              <div className="info">
                <h3>{item.product.name}</h3>
                <p className="size">Size : {item.size}</p>
                <div className="quantity">
                  <label>Quantity : </label>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        handleQuantityChange(index, {
                          target: { value: item.quantity - 1 },
                        })
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(index, {
                          target: { value: item.quantity + 1 },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p className="price">
                Price: {item.product.prices[item.size] * item.quantity} /=
              </p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="order-details">
            <h3>Order Details</h3>
            <hr />
            {cart.map((item, index) => (
              <div className="order-item" key={index}>
                <p>{item.product.name}</p>
                <p>
                  Price: {item.product.prices[item.size] * item.quantity} /=
                </p>
              </div>
            ))}
            <hr />
            <div className="subtotal">
              <p>Sub Total :</p>
              <p>{totalAmount} /=</p>
            </div>
            <div className="discount">
              <p>
                Sale Discount : <span>0 /=</span>{" "}
              </p>
            </div>
            <div className="net-total">
              <p>Net Total :</p>
              <p>{totalAmount} /=</p>
            </div>
          </div>

          <div className="checkout-section">
            <hr />
            <div className="checkout-buttons">
              <Link to="/shop">
                <button className="continue-shopping-btn">
                  CONTINUE SHOPPING
                </button>
              </Link>
              <Link to="/checkout">
                <button className="checkout-btn">CHECKOUT</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
