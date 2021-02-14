import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
const RecipeList = (props) => {
  return (
// <<<<<<< ryan
//         <div className="fav-div">
//                   <div className="selected-fav">
//                   <h3 className="fav-title">{props.title}</h3>
//                   <button className="fav-close" onClick={props.hide}>X</button>
//                     <img className="fav-image" src={props.image}></img>
          
//                   <label className="fav-label">Ingredients
//                   <li>
//                     {props.ingredients}
//                   </li>
//                   </label>
//                   <label className="fav-label">Preparation
//                   <ul>
//                     {props.preparation.split(".").map(p=> {return <li>{p}</li>}).join("")}
//                   </ul>
//                   </label>
//                   </div>
// =======
//     <div className="favcontainer" id="favcontainer">
//       <div className="favcontinner" id="favcontinner">
//         <div onClick={props.hide} className="Favline">
//           <h2>{props.title}</h2>
// >>>>>>> main
//         </div>
        <div className="fav-image-div" id="favimgdiv">
          <img className="fav-image" src={props.image}></img>
        </div><br />
        <label><h3>Ingredients</h3></label>
        <li>
          <h4>{props.ingredients}</h4>
          <h4>{props.ingredients.ingredients}</h4>
        </li><br />
        <label><h3>preparation</h3></label>
        <li>
          <h4>{props.preparation}</h4>

        </li><br /><br />
        <Button color="secondary" variant="contained" className="favbutton" onClick={props.hide}>Close</Button>
      </div>
    </div>
  )
}

export default RecipeList
