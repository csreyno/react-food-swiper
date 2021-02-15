import React, { useState, useEffect } from "react";
import axios from "axios";
// import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
// import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
//To run install "yarn add @material-ui/core" and "yarn add @material-ui/icons"
//sources: https://material-ui.com/getting-started/installation/
//         https://www.youtube.com/watch?v=zgKH12s_95A

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      background: "white",
      margin: theme.spacing(2),
      width: 300,
    },
  },
  button: {
    margin: theme.spacing(6),
    alignContent: "center",
  },
}));

export default function RecipeForm2(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [readyInMinutes, setreadyInMinutes] = useState("");
  const [image, setImage] = useState("");
  const [preparation, setPreparation] = useState("");
  const classes = useStyles();
  const [id] = useState(0);  // unused var setId;  const [id, setId] = useState(0);
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), Ingredients: "" },
  ]);
  useEffect(() => {
    if (props.recipe) {
      setTitle(props.recipe.title)
    }

  }, [props]);

  const newList = async (recipeid) => {
    const resp = await axios.post('/api/members-only/addlike', {
      recipe_id: recipeid
    });
    console.log(resp.data)
    console.log(recipeid)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //gets text data to db
    const addRecipeData = { id, inputFields, title, readyInMinutes, preparation }
    console.log(addRecipeData);
    const resp = await axios.post("/api/recipes/add", addRecipeData)
    //this recibes db entry id to return image link
    const data = new FormData()
    data.append("file", image);
    // const responseImg = await axios.post(`/api/recipes/image/${resp.data.id}`, data);
    console.log(resp);
    //---------------------
    newList(resp.data.id)
    console.log(resp.data.id);

  }


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), Ingredients: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <div className="newform">
      <form className={classes.root} onSubmit={handleSubmit} action="/profile" method="post" enctype="multipart/form-data">
        <Button onClick={() => setShow(!show)} variant="contained">
          Create New Recipe
        </Button>
        {show ? (
          <div>
            <TextField
              id="filled-basic"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              label="Recipe Name"
              fullWidth
              variant="filled"
            />
            <br />
            <TextField
              id="filled-basic"
              label="Cooking Time in Mins"
              variant="filled"
              value={readyInMinutes}
              onChange={(e) => {
                setreadyInMinutes(e.target.value);
              }}
            />
            {inputFields.map((inputField) => (
              <div className={classes.root} key={inputField.id}>
                <TextField
                  name="Ingredients"
                  label="Ingredients"
                  variant="filled"
                  value={inputField.Ingredients}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />

                <IconButton
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  <RemoveIcon />
                  <br />
                </IconButton>
                <IconButton onClick={handleAddFields}>
                  <AddIcon />
                </IconButton>
              </div>
            ))}

            <TextField
              id="filled-multiline-static"
              label="Instructions"
              multiline
              fullWidth
              rows={6}
              length={10}
              variant="filled"
              value={preparation}
              onChange={(e) => {
                setPreparation(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              // value={image}
              name="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="black"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <br />
            <br />
            <Button variant="contained" onClick={handleSubmit}>
              Create
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  );
}
