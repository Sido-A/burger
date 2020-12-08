import React, { useState, useEffect } from "react";
import "../css/Burgers.css";
// import { getData } from "../API";
import img from "../img/honest-burger.png";
import Burger from "./Burger";

function Burgers() {
  const [burgers, setBurgers] = useState([]);
  const [visible, setVisible] = useState(6);

  const loadBurger = () => {
    if (visible <= burgers.length) {
      setVisible(visible + 3);
    } else {
      setVisible(visible - 3);
    }
  };

  useEffect(() => {
    const fetchBurgers = async () => {
      await fetch("db.json")
        .then((res) => res.json())
        .then((res) => setBurgers(res.burgers));
    };
    fetchBurgers();
  }, []);

  return (
    <section className="burgers">
      <div className="burgers__title">
        <h1>Explore our Menus</h1>
        <p>
          Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings.
        </p>
      </div>

      <div className="burgers__container">
        {burgers?.slice(0, visible).map((burger, i) => (
          <Burger
            id={burger.id}
            img={img}
            name={burger.name}
            description={burger.description}
            cookingTime={burger.cookingTime}
            burger={burger}
          />
        ))}
      </div>
      <div className="burgers__loadButton" onClick={loadBurger}>
        {visible >= burgers.length ? (
          <span>Less Burgers</span>
        ) : (
          <span>More Burgers</span>
        )}
      </div>
    </section>
  );
}

export default Burgers;
