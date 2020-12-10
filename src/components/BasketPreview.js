import React, { useState, useContext } from "react";
import "../css/BasketPreview.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import checkoutImg from "../img/checkout-img.png";
import { burgersContext } from "../Context";

function BasketPreview() {
  const { state, dispatch } = useContext(burgersContext);
  const { burger } = state;

  const initialPrice = burger.length === 0 ? 0 : burger[0].price;
  const [price, setPrice] = useState(initialPrice);

  const deleteItem = (e) => {
    const id = parseInt(e.target.id);
    console.log(id);
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  const changeHandler = (e = 1) => {
    const priceMultiplyByQuantity = burger[0].price * parseInt(e.target.value);

    setPrice(priceMultiplyByQuantity);
  };

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
            <span
              className="delete"
              id={burger[0].id}
              onClick={(e) => deleteItem(e)}
            >
              x
            </span>
            <figure>
              <img src={`${checkoutImg}`} alt="" />
            </figure>
            <div className="basketPreview__main__itemDetails">
              <div className="basketPreview__details">
                <p className="basketPreview__servings">
                  {burger[0].servings} servings
                </p>
                <p className="basketPreview__burgerQuantity">
                  {burger.length} burger(s)
                </p>
              </div>
              <p className="basketPreview__description">
                {burger[0].description}
              </p>
              <div className="basketPreview__quantityDropDown">
                <select onChange={changeHandler} name="quantity" id="quantity">
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <p className="price">£ {price}</p>
              </div>
            </div>
          </div>
          <div className="basketPreview__deliveryFee">
            <p className="fee">Delivery Fee</p>
            <p className="price">£15</p>
          </div>
          <div className="basketPreview__totalPrice">
            <p className="total">total price :</p>
            <p className="price">£{price + 15}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BasketPreview;
