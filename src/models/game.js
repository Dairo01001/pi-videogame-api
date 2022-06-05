const { Model, DataTypes } = require('sequelize');

const game = (sequelize) => {
  class Game extends Model { }

  Game.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    background_image: {
      type: DataTypes.STRING,
    },
  }, { sequelize, modelName: 'Game', timestamps: false });
};

module.exports = game;
