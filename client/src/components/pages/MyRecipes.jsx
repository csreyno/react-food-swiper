import React from "react";
import RecipeForm from "./RecipeForm";
import RecipeForm2 from "./RecipeForm2";
export default function MyRecipes(props) {
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Recipes</h1>
        {/* <ul>
          {props.recipes.map((recipes) => (
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
        <RecipeForm2 />
        <br />
        <br />
      </div>
    </div>
  );
}
