"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      likes.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      likes.belongsTo(models.posts, {
        foreignKey: "post_id",
      });

      models.User.belongsToMany(models.posts, {
        through: like,
        foreignKey: "user_id",
      });

      models.recipes.belongsToMany(models.User, {
        through: like,
        foreignKey: "post_id",
      });
    }
  }
  Like.init(
    {
      recipe_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      like_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};
