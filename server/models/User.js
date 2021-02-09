'use strict';
const {
  Model
} = require('sequelize');
const Like = require('./Like');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Recipe, {
      //   foreignKey: "recipe_id"
      //   // through: Likes
      // });
      User.hasMany(models.Like, {
        foreignKey: "user_id"
      });
      // User.hasMany(models.Posts, {
      //   foreignKey: "recipe_id"
      // })
    }
  };
  User.init({
    username: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};