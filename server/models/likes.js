"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      likes.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      likes.belongsTo(models.recipes, {
        foreignKey: "recipe_id",
      });

      models.User.belongsToMany(models.recipes, {
        through: likes,
        foreignKey: "user_id",
      });

      models.recipes.belongsToMany(models.User, {
        through: likes,
        foreignKey: "recipe_id",
      });
    }
  }
  likes.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "recipes",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        reference: {
          model: "User",
          key: "id",
        },
      },
      likeCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};
