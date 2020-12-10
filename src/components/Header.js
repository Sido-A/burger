import React, { useState, useContext } from "react";
import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import { burgersContext } from "../Context";

function Header() {
  const { state, dispatch } = useContext(burgersContext);
  const { basket } = state;
  const [checkedBox, setCheckedBox] = useState(false);

  const clickHandler = () => {
    setCheckedBox(!checkedBox);
  };

  return (
    <header className="header">
      <div className="header__container">
        <input
          class="switcher"
          type="checkbox"
          id="menu"
          onClick={clickHandler}
          checked={checkedBox}
        />
        <label class="open" for="menu">
          <MenuIcon fontSize="large" />
        </label>
        <div className="header__nav" onClick={clickHandler}>
          <NavLink className="link" exact to="/" onClick={clickHandler}>
            <span>home</span>
          </NavLink>
          <NavLink className="link" to="/menu" onClick={clickHandler}>
            <span>on the menu</span>
          </NavLink>
          <NavLink className="link" to="/wines" onClick={clickHandler}>
            <span>wines</span>
          </NavLink>
          <NavLink className="link" to="/gifts" onClick={clickHandler}>
            <span>gifts</span>
          </NavLink>
          <NavLink className="link" to="/market" onClick={clickHandler}>
            <span>market</span>
          </NavLink>

          <label class="close" for="menu" onClick={clickHandler}>
            x
          </label>
        </div>
        <div className="header__cart">
          <Link className="cart" to="/checkout">
            <ShoppingCartIcon fontSize="large" />
            {basket.length === 0 ? null : (
              <span className="header__cartItemNumbers">{basket.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
