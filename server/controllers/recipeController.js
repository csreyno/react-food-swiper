const { Recipe } = require("../models");

const addRecipe = async (req, res) => {
  const { id } = req.session.user;
  const { title, readyInMinutes, image, instructions, inputFields } = req.body;
  console.log("---------------------");
  console.log(req.body);


  const newPost = await Recipe.create({
    title,
    readyInMinutes,
    preparation: instructions,
    image,
    ingredients: inputFields,
  });
  return res.status(200).json({
    message: "success",
  });
};

module.exports = { addRecipe };
