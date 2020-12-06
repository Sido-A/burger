import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../css/Menu.css";
// import { getData } from "../API";
import img from "../img/honest-burger.png";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import Burgers from "./Burgers";

function Menu() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      await fetch("db.json")
        .then((res) => res.json())
        .then((res) => setBurgers(res.burgers));
    };
    fetchBurgers();
  }, []);

  return (
    <section className="menu">
      <div className="menu__title">
        <h1>Explore our Menus</h1>
        <p>
          Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings.
        </p>
      </div>

      <div className="menu__container">
        {burgers?.map((burger, i) => (
          <Link className="menu__item" to={`recipe/${burger.id}`}>
            <div className="menu__imgWrapper">
              <figure className="menu__img">
                <img src={`${img}`} alt="" />
              </figure>
              <p className="menu__burgerTitle">{burger.name}</p>
            </div>
            <div className="menu__info">
              <p className="menu__description">{burger.description}</p>
              <p className="menu__cookingTime">
                <QueryBuilderIcon />
                {burger.cookingTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Menu;
