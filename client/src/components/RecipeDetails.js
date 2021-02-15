import React from 'react'
import Button from "@material-ui/core/Button";
const RecipeList = (props) => {
  const prep = props.preparation.split(".");
  const ingredients = props.ingredients;

  return (
  <div className="fav-div">
    <div className="favcontainer" id="favcontainer">
      <div className="favcontinner" id="favcontinner">
        <div onClick={props.hide} className="Favline">
          <div className="title-div">
            <h2 className="fav-title">{props.title}</h2>
          </div>
        </div>
        <div className="img-div" id="favimgdiv">
          <img className="fav-image" src={props.image} alt={props.title}></img>
        </div><br />
        <h3 >Ingredients</h3>
          <ul>
            {ingredients.map(i => <li className="ingredient-list">{i}</li>)}
          </ul>
        <br />
        <h3>Preparation</h3>
        <ol >
              {prep.map(p => <li className="prep-list">{p}</li>)}
          </ol>
        <br />
        <br />
        <div className="close-button-recipe-card">
                  <Button color="secondary" variant="contained" className="favbutton" onClick={props.hide}>Close</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RecipeList
