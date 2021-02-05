"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      posts.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      posts.belongsTo(models.like, {
        foreignKey: "like_count",
      });

      models.User.belongsToMany(models.Posts, {
        through: posts,
        foreignKey: "user_id",
      });

      models.posts.belongsToMany(models.User, {
        through: Posts,
        foreignKey: "like_count",
      });
    }
  }
  Posts.init(
    {
      title: DataTypes.STRING,
      readyInMinutes: DataTypes.INTEGER,
      ingredients: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      like_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
