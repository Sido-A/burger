import React from "react";
import "../css/OrderCompleted.css";
import orderCompletedImg from "../img/orderCompleted-img.png";

function OrderCompleted() {
  return (
    <div className="orderCompleted">
      <figure>
        <img src={`${orderCompletedImg}`} alt="" />
      </figure>
      <p>Thank you for your order!</p>
    </div>
  );
}

export default OrderCompleted;
