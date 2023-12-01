import React from "react";
import { Link } from "react-router-dom";
import tickImage from "../components/Assets/tick.png";

const Completion = () => {
  return (
    <div className="completion-container">
      <img src={tickImage} alt="Tick" className="tick-image" />
      <p className="confirmation-message">Your order is confirmed!!</p>
      <p className="thanks-message">Thanks for your order.</p>
      <Link to="/shop">
        <button className="done-button">DONE</button>
      </Link>
    </div>
  );
};

export default Completion;
