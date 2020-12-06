import React from "react";
import "../css/Bottom.css";
import Button from "./Button";

function Bottom() {
  return (
    <section className="bottom">
      <div className="bottom__container">
        <h1 className="bottom__title">Homemade Burger</h1>
        <Button className="bottom__button" />
      </div>
    </section>
  );
}

export default Bottom;
