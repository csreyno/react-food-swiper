import React, {useState} from "react";
import ResCard from "./ResCard";

export default function Favorites(props) {
  const [show, setShow] = useState(false)
  console.log(props.recipes)
  return (
    <div>
      <br />
      <br />

      <div className="myrecipes">
        <br />
        <h1 className="PageTitle">My Favorites</h1>
        <br />
                <ul>
          {props.recipes.map((r) => (
            <li
              onClick={(e) => setShow(!show)} variant="contained"              
            >
              {r.Recipe.title}
            </li>
            
          ))}
          {show ? (
            <div>
              {props.recipes.map((r) => (
                <div>
                <h3>{r.Recipe.title}</h3>
                <div className="fav-image-div">
                  <img className="fav-image" src={r.Recipe.image}></img>
                </div>
                <label>Ingredients</label>
                <li>
                  {r.Recipe.ingredients}
                </li>
                <li>
                  {r.Recipe.preparation}
                </li>

                </div>
          ))}
            </div>
          ) : null}
        </ul>
        <br />
        <ResCard />

      </div>
    </div>
  );
}
