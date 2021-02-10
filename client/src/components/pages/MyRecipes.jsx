import React from "react";
import RecipeForm from "./RecipeForm";

export default function MyRecipes(props) {
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h3 className="PageTitle">My Recipes</h3>
        <RecipeForm />
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
        <br />
      </div>
    </div>
  );
}
