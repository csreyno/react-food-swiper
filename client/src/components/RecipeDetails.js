import React, { useState } from 'react'

const RecipeList = (props) => {
  return (
        <div className="fav-div">
                  <div className="selected-fav">
                  <h3 className="fav-title">{props.title}</h3>
                  <button className="fav-close" onClick={props.hide}>X</button>
                    <img className="fav-image" src={props.image}></img>
          
                  <label className="fav-label">Ingredients
                  <li>
                    {props.ingredients}
                  </li>
                  </label>
                  <label className="fav-label">Preparation
                  <ul>
                    {props.preparation.split(".").map(p=> {return <li>{p}</li>}).join("")}
                  </ul>
                  </label>
                  </div>
        </div>
    )
}

export default RecipeList
