'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recipe.init({
    title: DataTypes.STRING,
    readyInMinutes: DataTypes.INTEGER,
    ingredients: DataTypes.STRING,
    preparation: DataTypes.STRING,
    image: DataTypes.STRING,
    cuisine: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};