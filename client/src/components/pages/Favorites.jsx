import React, { useState } from "react";
import RecipeDetails from "../RecipeDetails"

export default function Favorites(props) {
  const [show, setShow] = useState("");
  console.log(props)
  console.log(props.recipes)
  return (
    props.recipes.length === 0 ? null :
      <div>
        <br />
        <br />

        <div className="myrecipes">
          {/* <br /> */}
          <h1 className="PageTitle">My Favorites</h1>
          {/* <br /> */}
          <ul>
            {props.recipes.map(r => (
              r.Recipe ?
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
                        hide={() => {
                          setShow("")
                        }
                        }
                        title={r.Recipe.title}
                        image={r.Recipe.image}
                        ingredients={r.Recipe.ingredients}
                        preparation={r.Recipe.preparation}
                      />
                    </li>
                  }
                </> : null
            ))}
          </ul>
          <br />
        </div>
      </div>
  );
}
