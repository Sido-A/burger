import React, { useContext } from "react";
import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { burgersContext } from "../Context";

function Header() {
  const { state, dispatch } = useContext(burgersContext);
  const { basket } = state;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <NavLink className="link" exact to="/">
            <span>home</span>
          </NavLink>
          <NavLink className="link" to="/menu">
            <span>on the menu</span>
          </NavLink>
          <NavLink className="link" to="/wines">
            <span>wines</span>
          </NavLink>
          <NavLink className="link" to="/gifts">
            <span>gifts</span>
          </NavLink>
          <NavLink className="link" to="/market">
            <span>market</span>
          </NavLink>
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
