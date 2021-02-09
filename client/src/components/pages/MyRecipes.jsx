import React from "react";

export default function MyRecipes(props) {
  return (
    <div>
      <div className="fav-list">
        <h2>My Recipes</h2>

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
      </div>
      <button>Add new recipe</button>
    </div>
  );
}
