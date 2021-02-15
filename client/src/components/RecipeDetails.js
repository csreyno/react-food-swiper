import React, { useState } from 'react';

const RecipeList = (props) => {
  const prep = props.preparation.split(".");
  const ingredients = props.ingredients
  console.log(prep);

  return (
        <div className="fav-div">
          <div className="title-div">
            <h3 className="fav-title" onClick={props.hide}>{props.title}</h3>

          </div>
          <div className="img-div">
            
            <img className="fav-image" src={props.image}></img>
            </div>
          <div className="ing-div">
            <h4 className="fav-label">Ingredients</h4>
              <ul>
                {ingredients.map(i => <li className="ingredient-list">{i}</li>)}
              </ul>
          </div>
          <div className="prep-div">
            <h4 className="fav-label">Preparation</h4>
              <ol >
                {prep.map(p => <li className="prep-list">{p}</li>)}
              </ol>
          </div>
        </div>
    );
};

export default RecipeList
