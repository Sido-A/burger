import React, { useContext } from "react";
import "../css/OrderCompleted.css";
import orderCompletedImg from "../img/orderCompleted-img.png";
import { burgersContext } from "../Context";

function OrderCompleted() {
  const { state, dispatch } = useContext(burgersContext);
  console.log(state.basket);
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
