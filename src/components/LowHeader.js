import React from "react";
import "../css/LowHeader.css";
import headerImg from "../img/lowHeaderImg.png";
import Header from "./Header";

function LowHeader() {
  return (
    <header className="lowHeader">
      <figure className="lowHeaderImg">
        <img src={`${headerImg}`} alt="" />
      </figure>
      <div className="lowHeaderPosition">
        <Header />
      </div>
    </header>
  );
}

export default LowHeader;
