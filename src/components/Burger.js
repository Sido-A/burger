import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../img/honest-burger.png";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import "../css/Burger.css";
import { burgersContext } from "../Context";

function Burger({ id, img, name, description, cookingTime, burger }) {
  const { state, dispatch } = useContext(burgersContext);

  const showRecipe = () => {
    console.log(burger);
    dispatch({
      type: "BURGER_RECIPE",
      payload: burger,
    });
  };

  return (
    <Link to="/recipe" onClick={showRecipe} className="burger__item" id={id}>
      <div className="burger__imgWrapper">
        <figure className="burger__img">
          <img src={`${image}`} alt="" />
        </figure>
        <p className="burger__burgerTitle">{name}</p>
      </div>
      <div className="burger__info">
        <p className="burger__description">{description}</p>
        <p className="burger__cookingTime">
          <QueryBuilderIcon />
          {cookingTime}
        </p>
      </div>
    </Link>
  );
}

export default Burger;
