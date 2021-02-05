"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Comments.belongsTo(models.post, {
        foreignKey: "post_id",
      });

      models.User.belongsToMany(models.post, {
        through: Comments,
        foreignKey: "user_id",
      });

      models.recipes.belongsToMany(models.User, {
        through: Comments,
        foreignKey: "post_id",
      });
    }
  }
  Comments.init(
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
