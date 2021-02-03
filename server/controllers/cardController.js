const { memberLayout } = require("../utils");

const generateCard = (req, res) => {
  res.render("card", {
    ...memberLayout,
  });
};

module.exports = {
  generateCard,
};
