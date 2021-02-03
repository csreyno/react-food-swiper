'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recipes.hasMany(models.likes, {
        foreignKey: "recipe_id"
      });
    }
  };
  recipes.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    preparation: DataTypes.STRING,
    category: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipes',
  });
  return recipes;
};