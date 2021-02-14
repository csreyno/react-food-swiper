import React from "react";
import RecipeForm2 from "./RecipeForm2";
import { useState } from "react";

export default function MyRecipes(props) {
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Recipes</h1>
        {/* <ul>
          {props.recipe.map((recipes) => (
            <li
              onClick={(e) => {
                props.chooseRecipe(recipes.id);
              }}
            >
              {recipes.title}
            </li>
          ))}
        </ul> */}
        <br />
        <br />
      </div>
      <div className="myform">
        <RecipeForm2 />
      </div>
    </div>
  );
}
