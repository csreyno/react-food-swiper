const { Recipe } = require("../models");
const UPLOAD_URL = "/images/";

const addImage = async (req, res) => {
  const { id } = req.params;
  const { file } = req;
  const recipe = await Recipe.findOne({
    where: {
      id,
    },
  });
  let mediaPic = file ? UPLOAD_URL + file.filename : ""
  recipe.image = mediaPic;
  await recipe.save();
  res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { id } = req.session.user;
  const { file } = req
  const { title, readyInMinutes, preparation, inputFields } = req.body;
  let media = file ? UPLOAD_URL + file.filename : ""

  const newPost = await Recipe.create({
    title,
    readyInMinutes,
    preparation: preparation,
    ingredients: inputFields,
  });

  return res.status(200).json({
    message: "success",
    id: newPost.id
  });
};

module.exports = { addRecipe, addImage };
