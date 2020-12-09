import React from "react";
import "../css/Checkout.css";
import CheckoutForm from "./CheckoutForm";
import BasketPreview from "./BasketPreview";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <CheckoutForm />
      </div>
      <div className="checkout__right">
        <BasketPreview />
      </div>
    </div>
  );
}

export default Checkout;
