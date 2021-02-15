const { Recipe } = require('../models')

const generateCard = async (req, res) => {
  const cards = await Recipe.findAll()//{limit: 50}
  return res.status(200).json(cards);

}

module.exports = {
  generateCard,
};
