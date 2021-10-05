//used to be project


const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    report: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
    },
    timeSeen: {
      type: DataTypes.DATE,
    },
    timeFiled: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    category_id:  {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
