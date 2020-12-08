import React, { useContext } from "react";
import "../css/Recipes.css";
import { burgersContext } from "../Context";

function Recipes() {
  const { state, dispatch } = useContext(burgersContext);
  const { burger } = state;
  console.log(burger[0].id);
  const item = burger[0];
  return (
    <div className="recipe">
      <div className="recipe__header"></div>
      <div>{item.id}</div>
    </div>
  );
}

export default Recipes;
