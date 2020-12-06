import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <Link className="link" to="/">
            <span>home</span>
          </Link>
          <Link className="link" to="/menu">
            <span>on the menu</span>
          </Link>
          <Link className="link" to="/recipes">
            <span>recipes</span>
          </Link>
          <Link className="link" to="/wines">
            <span>wines</span>
          </Link>
          <Link className="link" to="/gifts">
            <span>gifts</span>
          </Link>
          <Link className="link" to="/market">
            <span>market</span>
          </Link>
        </div>
        <div className="header__cart">
          <Link className="cart" to="/checkout">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
