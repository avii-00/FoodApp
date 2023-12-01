import React, { useState } from "react";
import { useCart } from "../CartContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const { cart, setCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedShippingAmount, setSelectedShippingAmount] = useState(null);
  const navigate = useNavigate();

  const handleCompleteOrder = async () => {
    const allFields = document.querySelectorAll("input[required]");
    let allFieldsFilled = true;

    allFields.forEach((field) => {
      if (!field.value) {
        allFieldsFilled = false;
      }
    });

    const shippingMethodSelected = !!selectedShippingAmount;
    const paymentMethodSelected = !!selectedPayment;

    if (allFieldsFilled && shippingMethodSelected && paymentMethodSelected) {
      const formattedProducts = cart.map((item) => {
        const { quantity, size, product } = item;
        const productName = product.name;
        return `${quantity} ${size} ${productName}`;
      });

      const orderDetails = {
        products: formattedProducts.join("\n"),
        email: document.querySelector('input[type="email"]').value,
        firstName: document.querySelector('input[placeholder="First Name"]')
          .value,
        lastName: document.querySelector('input[placeholder="Last Name"]')
          .value,
        address: document.querySelector('input[placeholder="Address"]').value,
        city: document.querySelector('input[placeholder="City"]').value,
        postalCode: document.querySelector('input[placeholder="Postal Code"]')
          .value,
        phone: document.querySelector('input[type="tel"]').value,
        subTotal: subtotal,
        netTotal: total,
        paymentMethod: selectedPayment,
        orderStatus: "Pending",
      };

      try {
        const response = await axios.post(
          "http://localhost:8081/createOrder",
          orderDetails
        );
        if (response.data === "Success") {
          // Clear the cart
          setCart([]);
          // All fields are filled, navigate to /completion page
          navigate("/completion");
        } else {
          alert("Failed to create order. Please try again later.");
        }
      } catch (error) {
        console.error("Error creating order:", error);
        alert("Failed to create order. Please try again later.");
      }
    } else {
      alert("Please fill in all necessary details");
    }
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleShippingOptionChange = (e) => {
    setSelectedShippingAmount(e.target.value);
  };

  const subtotal = cart.reduce((total, item) => {
    const price = item.product.prices[item.size];
    return total + price * item.quantity;
  }, 0);

  const total =
    subtotal +
    (selectedShippingAmount ? parseFloat(selectedShippingAmount) : 0);

  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item, index) => (
          <div className="order-item" key={index}>
            <img src={item.product.imgSrc} alt={item.product.name} />
            <div className="info">
              <h3>{item.product.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.product.prices[item.size] * item.quantity} /=</p>
            </div>
          </div>
        ))}

        <div className="order-details">
          <hr />
          <p className="subtotal">
            Sub Total : <span className="bold-text">{subtotal} /=</span>
          </p>
          <p className="shipping">
            Shipping Amount :{" "}
            <span className="bold-text">
              {selectedShippingAmount ? `${selectedShippingAmount} /=` : "N/A"}
            </span>
          </p>
          <hr />
          <p className="total">
            Net-Total : <span className="bold-text">{total} /=</span>
          </p>
        </div>
      </div>

      <div className="contact">
        <hr />
        <h2>Contact Information</h2>
        <p>
          Enter a valid email address in which we can easily connect with you.
        </p>
        <input type="email" placeholder="Email" required />
      </div>

      <div className="delivery">
        <h2>Shipping Address</h2>
        <p>Fill the following fields accurately.</p>
        <div className="name-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="text" placeholder="Company (optional)" />
        <input type="text" placeholder="Address" required />
        <div className="city-postal">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
        </div>
        <input type="tel" placeholder="Phone" required />
      </div>

      <div className="shipping-method">
        <h2>Shipping Method</h2>
        <p>Select your preferred shipping method.</p>
        <div className="shipping-options">
          <label>
            <input
              type="radio"
              name="shipping"
              value="290"
              onChange={handleShippingOptionChange}
            />
            Colombo District - Rs 290.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Galle District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Gampaha District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Kaluthara District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Kandy District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Kegalla District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Matara District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Puttalam District - Rs 390.00
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="shipping"
              value="390"
              onChange={handleShippingOptionChange}
            />
            Ratnapura District - Rs 390.00
          </label>
        </div>
      </div>

      <div className="payment">
        <h2>Payment Method</h2>
        <p>All transactions are secure and encrypted.</p>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="payment"
              value="cashOnDelivery"
              checked={selectedPayment === "cashOnDelivery"}
              onChange={handlePaymentChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="bankDeposit"
              checked={selectedPayment === "bankDeposit"}
              onChange={handlePaymentChange}
            />
            Bank Deposit
          </label>
        </div>

        {selectedPayment === "bankDeposit" && (
          <div className="bank-info">
            <p>Bank transfer request information are as below.</p>
            <p>Name : FoodLovers (private) ltd</p>
            <p>Bank : Commercial Bank PLC - Rathmalana Branch</p>
            <p>Account No : 1234 4567 7890</p>
            <p>Branch Code - 92</p>
            <hr />
            <p>
              Let us know once the deposit is done today and please share the
              image of the deposit/transfer slip.
            </p>
          </div>
        )}
      </div>

      <hr />

      <div className="button-container">
        <Link to="/cart">
          <button className="return-cart-btn">RETURN TO CART</button>
        </Link>
        <button className="complete-order-btn" onClick={handleCompleteOrder}>
          COMPLETE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
