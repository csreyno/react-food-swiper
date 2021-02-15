import React from "react";
import RecipeForm2 from "./RecipeForm2";
import RecipeDetails from "../RecipeDetails"
import { useState } from "react";

export default function MyRecipes(props) {
  const [show, setShow] = useState("")
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Recipes</h1>
        <ul>
            {props.recipes.map(r => (
              r.Recipe && r.Recipe.id > 121 ?
              <>
              <li
                onClick={(e) => setShow(r.Recipe.title)}
                className="fav-list"             
              >
                {r.Recipe.title}
              </li>
            
              {r.Recipe && r.Recipe.title === show &&
              <li>
              <RecipeDetails
                hide = {() => {
                setShow("") 
                  }
                } 
                title = {r.Recipe.title}
                image = {r.Recipe.image}
                ingredients = {r.Recipe.ingredients}
                preparation = {r.Recipe.preparation}
                 />
                 </li>
                }
            </> : null   
            ))}
            </ul>
        <br />
        <br />
      </div>
      <div className="myform">
        <RecipeForm2 />
      </div>
    </div>
  );

};

