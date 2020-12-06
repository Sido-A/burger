import React from "react";
import "../css/Main.css";
import firstImg from "../img/main-firstImg.png";
import secondImg from "../img/main-secondImg.png";
import thirdImg from "../img/main-thirdImg.png";

function Main() {
  return (
    <section className="main">
      <div className="main__info">
        <div className="main__infoDetails">
          <h1>Choose your meals</h1>
          <p>
            Our chef-designed recipes include balanced Mediterranean meals,
            quick one-pan dinners, and top-rated customer favorites.
          </p>
        </div>
        <figure className="main__infoImg">
          <img src={`${firstImg}`} alt="" />
        </figure>
      </div>

      <div className="main__info">
        <div className="main__infoDetails">
          <h1>Choose your meals</h1>
          <p>
            Our chef-designed recipes include balanced Mediterranean meals,
            quick one-pan dinners, and top-rated customer favorites.
          </p>
        </div>
        <figure className="main__infoImg">
          <img src={`${secondImg}`} alt="" />
        </figure>
      </div>

      <div className="main__info">
        <div className="main__infoDetails">
          <h1>Create magic</h1>
          <p>
            We guarantee the freshness of all our ingredients and deliver them
            Following our step-by-step instructions you’ll experience the magic
            of cooking recipes that our chefs create with your family’s tastes
            in mind.
          </p>
        </div>
        <figure className="main__infoImg">
          <img src={`${thirdImg}`} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Main;
