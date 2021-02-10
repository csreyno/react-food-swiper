import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

export default function RecipeForm(props) {
  const [show, setShow] = useState(true);
  const [inputingredients, setinputingredients] = useState([
    { Ingredient: "" },
  ]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const storeRecipe = RecipeForm.storage().ref();
    const fileRef = storeRecipe.child(data.image[0].title);
    fileRef.put(data.image[0]).then(() => {
      console.log("Uploaded a file");
    });
  };

  return (
    <div className="form">
      <button onClick={() => setShow(!show)}>Create new recipe</button>
      {show ? (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Recipe Name:</label>
          <br />

          <input required type="text" />
          <br />
          <br />
          <label>Ingredients:</label>
          <br />
          <input required type="text" />
          <br />
          <br />
          <label>Cooking Directions:</label>
          <br />
          <textarea
            required
            type="text"
            name="message"
            rows="5"
            cols="20"
          ></textarea>
          <br />
          <br />
          <label>Cooking time in minutes:</label>
          <br />
          <input required type="number" />
          <br />
          <br />
          <label for="myimage">Please upload your picture below:</label>
          <br />
          <br />
          <input required ref={register} type="file" name="image" />
          <br />
          <br />
          <input type="submit" />
          <br />
        </form>
      ) : null}
    </div>
  );
}
