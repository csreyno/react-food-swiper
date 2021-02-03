const { layout } = require("../utils");

const badUser = (req, res) => {
  res.render("unauthorized", {
    ...layout,
  });
};

module.exports = {
  badUser
};
