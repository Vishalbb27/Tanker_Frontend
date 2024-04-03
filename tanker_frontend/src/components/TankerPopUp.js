import React, { useState } from "react";
import "../style/tankerpopup.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const TankerPopUp = ({ onClose }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 5) {
      return setQuantity(quantity + 1);
    }
    if (quantity === 5) {
      toast.error("Order limit reached.");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOnClick = () => {
    if (userInfo) {
      toast.success("Order Placed");
      onClose();
    } else {
      toast.error("Login to place order");
      onClose();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          ×
        </span>
        <div className="popup-card">
          <div className="popup-sub">
            <h2>Tanker Details</h2>

            <p>
              <strong>Quantity</strong>
            </p>

            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <strong></strong> {quantity}
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button
              class="custom-btn btn-5 order-button"
              onClick={() => handleOnClick()}
            >
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TankerPopUp;
