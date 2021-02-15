const { Recipe } = require('../models')

const generateCard = async (req, res) => {
  // const { id } = req.session.user;
  // const { recipeid } = req.body

  const cards = await Recipe.findAll({limit: 50})
  return res.status(200).json(cards);

}

module.exports = {
  generateCard,
};
