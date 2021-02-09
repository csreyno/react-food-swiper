'use strict';
const {
  Model
} = require('sequelize');
const Like = require('./Like');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Recipe.hasMany(models.User, {
      //   foreignKey: "user_id",
          // through: models.Like
      // });

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