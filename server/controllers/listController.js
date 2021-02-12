const { memberLayout } = require("../utils");
const { Like } = require('../models')
const { Recipe } = require('../models');

// const generateList = (req, res) => {
//   res.render("list", {
//     ...memberLayout,
//   });
// };

const processForm = async (req, res) => {
  const { id } = req.session.user;
  const { recipeid } = req.body
  // if (id) {
  //     const listLike = await Like.create({
  //         recipeid
  //     });
  //     res.redirect(`${req.baseUrl}/`)
  // } else {
  //     res.redirect(req.url);
  // }
  
};

const generateList = async (req, res) => {
  const { id } = req.session.user;
  if (id) {
    const myRecipes = await Like.findAll({
      where: {
        user_id: id,
      },
      include: Recipe
    });
    // const recipeData = await Recipe.findAll({
    //   where: {
    //     recipe_id: myRecipes.recipe_id
    //   }
    // })
    console.log(myRecipes)
    return res.status(200).json({
      message: "Success",
      myRecipes
    })
  } else {
    res.status(400).json({
      message: "You have not liked any recipes yet!"
  });      
  }
}

module.exports = {
  generateList,
  processForm
};
