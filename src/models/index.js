const category = require('./category');
const game = require('./game');

const models = (sequelize) => {
  game(sequelize);
  category(sequelize);
};

module.exports = models;
