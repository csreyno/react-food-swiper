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
      Like.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Like.belongsTo(models.Recipe, {
        foreignKey: "recipe_id",
      });
      models.User.belongsToMany(models.Recipe, {
        through: Like,
        foreignKey: "user_id",
      }); //^^ Is this needed?
      models.Recipe.belongsToMany(models.User, {
        through: Like,
        foreignKey: "recipe_id",
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
