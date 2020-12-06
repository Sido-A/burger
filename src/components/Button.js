import React from "react";
import { Link } from "react-router-dom";
import "../css/Button.css";

function Button() {
  return (
    <div className="button">
      <Link to="/menu" className="button__title">
        Get Started
      </Link>
    </div>
  );
}

export default Button;
