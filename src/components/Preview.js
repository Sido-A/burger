import React, { useContext } from "react";
import "../css/Preview.css";
import previewImg from "../img/preview-img.png";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { burgersContext } from "../Context";

function Preview({ burgerDetails }) {
  const { name, description, calories, servings } = burgerDetails;
  const { state, dispatch } = useContext(burgersContext);

  const addItem = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: burgerDetails,
    });
  };

  return (
    <section className="preview">
      <div className="preview__left">
        <p className="preview__name">{name}</p>
        <p className="preview__cookingTime">
          <QueryBuilderIcon />
          55mins
        </p>
        <div className="preview__servingAndCalory">
          <p>{servings} Serving</p>
          <p>{calories} cals/serving</p>
        </div>
        <div className="preview__description">{description}</div>
        <button className="addToBasket" onClick={addItem}>
          add to basket
        </button>
      </div>
      <figure className="preview__right">
        <img src={`${previewImg}`} alt="" />
      </figure>
    </section>
  );
}

export default Preview;
