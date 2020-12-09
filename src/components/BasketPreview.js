import React, { useContext } from "react";
import "../css/BasketPreview.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import checkoutImg from "../img/checkout-img.png";
import { burgersContext } from "../Context";

function BasketPreview() {
  const { state, dispatch } = useContext(burgersContext);
  const { burger } = state;

  return (
    <div className="basketPreview">
      {burger.length === 0 ? (
        <h1 className="basketPreview__noItem">No item in the basket</h1>
      ) : (
        <div className="basketPreview__container">
          <div className="basketPreview__header">
            <div className="basketPreview__cart">
              <ShoppingCartIcon fontSize="large" className="cartIcon" />
            </div>
            <p className="basketPreview__title">Basket</p>
          </div>
          <div className="basketPreview__main">
            <span className="delete">x</span>
            <figure>
              <img src={`${checkoutImg}`} alt="" />
            </figure>
            <div className="basketPreview__main__itemDetails">
              <div className="basketPreview__details">
                <p className="basketPreview__servings">2 servings</p>
                <p className="basketPreview__burgerQuantity">2 burgers</p>
              </div>
              <p className="basketPreview__description">
                lorem ips hfbsd bsdf sfgag agg arg agaergawr argawega awtaweefa
                lorem ips hfbsd bsdf sfgag agg arg agaergawr argawega awtaweefa
                lorem ips hfbsd bsdf sfgag agg arg agaergawr argawega awtaweefa
                lorem ips hfbsd bsdf sfgag agg arg agaergawr argawega awtaweefa
              </p>
              <div className="basketPreview__quantityDropDown">
                <select name="quantity" id="quantity">
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <p className="price">£ 15</p>
              </div>
            </div>
          </div>
          <div className="basketPreview__deliveryFee">
            <p className="fee">Delivery Fee</p>
            <p className="price">£15</p>
          </div>
          <div className="basketPreview__totalPrice">
            <p className="total">total price :</p>
            <p className="price">£15</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketPreview;
