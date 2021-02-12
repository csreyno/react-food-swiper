import React from "react";
import ResCard from "./ResCard";

export default function Favorites(props) {
  console.log(props)
  return (
    <div>
      <br />
      <br />

      <div className="recipes">
        <br />
        <h1 className="PageTitle">My Favorites</h1>
        <br />
                <ul>
          {props.recipes.map((recipes) => (
            <li
              onClick={(e) => {
                props.chooseRecipe(recipes.id);
              }}
            >
              {recipes.title}
            </li>
          ))}
        </ul>
        <br />
        <ResCard />

      </div>
    </div>
  );
}
