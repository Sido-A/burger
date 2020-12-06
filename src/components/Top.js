import React from "react";
import "../css/Top.css";
import topImg from "../img/top-img.png";
import Button from "./Button";

function Top() {
  return (
    <section className="top">
      <div className="top__container">
        <h1 className="top__title">Order our top-rated recipes today!</h1>
        <Button className="top__button" />
      </div>
    </section>
  );
}

export default Top;
