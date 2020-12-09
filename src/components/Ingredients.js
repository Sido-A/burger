import React from "react";
import "../css/Ingredients.css";
import ingredientsImg from "../img/ingredients-img.png";

function Ingredients({ ingredients }) {
  //   console.log(ingredients);

  const tests = [
    "bun",
    "patty",
    "ketchup",
    "mustard",
    "pickles",
    "onions",
    "lettuce",
    "cheese",
    "tomato",
    "bun",
  ];
  return (
    <div className="ingredients">
      <div className="ingredients__container">
        <div className="ingredients__title">
          <p>Fresh</p>
          <p className="yellow">Ingredients</p>
        </div>

        {/* <figure className="ingredientsBackgroundImg">
        <img src={`${ingredientsImg}`} alt="" />
      </figure> */}
        <div className="ingredients__ingredient">
          {ingredients?.map((ingredient) => (
            <dl>
              <dd>{ingredient}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
