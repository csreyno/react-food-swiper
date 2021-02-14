const { Like } = require('../models')
const { Recipe } = require('../models');

const generateList = async (req, res) => {
  const { id } = req.session.user;
  if (id) {
    const myRecipes = await Like.findAll({
      where: {
        user_id: id,
      },
      include: Recipe
    });
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
};
