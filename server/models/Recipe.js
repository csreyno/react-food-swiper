'use strict';
const {
  Model
} = require('sequelize');
const Like = require('./Like');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {

    static associate(models) {
      // association
      Recipe.belongsToMany(models.User, {
        foreignKey: "user_id",
        through: models.Like
      });
      Recipe.hasMany(models.Like, {
        foreignKey: "recipe_id"
      });

    }
  };
  Recipe.init({
    title: DataTypes.TEXT,
    readyInMinutes: DataTypes.INTEGER,
    ingredients: DataTypes.ARRAY(DataTypes.TEXT),
    preparation: DataTypes.TEXT,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};