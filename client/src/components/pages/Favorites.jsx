import React, {useState} from "react";
import ResCard from "./ResCard";
import RecipeDetails from "../RecipeDetails"

export default function Favorites(props) {
  const [show, setShow] = useState("");  
  console.log(props)
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Favorites</h1>
        <br />
          <ul>
            {props.recipes.map(r => (
              <>
              <li
                onClick={(e) => setShow(r.Recipe.title)}             
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
            </>    
            ))}
          </ul>
        <br />
        <ResCard />

      </div>
    </div>
  );
}
