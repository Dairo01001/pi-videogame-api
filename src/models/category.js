const { Model, DataTypes } = require('sequelize');

const category = (sequelize) => {
  class Category extends Model { }

  Category.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { sequelize, modelName: 'Category', timestamps: false });
};

module.exports = category;
