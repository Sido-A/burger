import React, { useContext, useEffect, useState } from "react";
import "../css/Recipes.css";
import { burgersContext } from "../Context";
import Ingredients from "./Ingredients";
import Preview from "./Preview";

function Recipes() {
  const { state, dispatch } = useContext(burgersContext);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const { burger } = state;
    setItem(burger[0]);
  }, []);
  
  return (
    <div className="recipe">
      <Preview burgerDetails={item} />
      <Ingredients ingredients={item.ingredients} />
    </div>
  );
}

export default Recipes;
