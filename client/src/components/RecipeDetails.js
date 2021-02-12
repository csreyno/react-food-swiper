import React, { useState } from 'react'

const RecipeList = (props) => {
  return (
        <div>
              <div>
                  <div>
                  <h3>{props.title}</h3>
                  <button onClick={props.hide}>X</button>
                  <div className="fav-image-div">
                    <img className="fav-image" src={props.image}></img>
                  </div>
                  <label>Ingredients</label>
                  <li>
                    {props.ingredients}
                  </li>
                  <li>
                    {props.preparation}
                  </li>

                  </div>
              </div>
        </div>
    )
}

export default RecipeList
