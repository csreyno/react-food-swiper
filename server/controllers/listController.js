const { memberLayout } = require("../utils");
const { likes } = require('../models')
const { recipes } = require('../models')

// const generateList = (req, res) => {
//   res.render("list", {
//     ...memberLayout,
//   });
// };

const processForm = async (req, res) => {
  const { id } = req.session.user;
  const { recipeid } = req.body
  if (id) {
      const listLike = await likes.create({
          recipeid
      });
      res.redirect(`${req.baseUrl}/`)
  } else {
      res.redirect(req.url);
  }
  
};

const generateList = async (req, res) => {
  const { id } = req.session.user;
  if (id) {
    const myRecipes = await likes.findAll({
      where: {
        user_id: id,
      }
    });
    res.render('list', {
      locals: {
        myRecipes
      },
      ...memberLayout
    })
  } else {
    res.redirect('/')
  }
}

module.exports = {
  generateList,
  processForm
};
