const { Recipe } = require("../models");

const addRecipe = async (req, res) => {
  const { id } = req.session.user;
  const { title, readyInMinutes, image, instructions, inputFields } = req.body;
  const newPost = await Recipe.create({
    title,
    readyInMinutes,
    preparation: instructions,
    image,
    ingredients: inputFields.ingredients,
  });
  return res.status(200).json({
    message: "success",
  });
};

module.exports = { addRecipe };
