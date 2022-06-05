const { Sequelize } = require('sequelize');

const config = require('./config');
const models = require('./models');
const logger = require('./utils/logger');

const sequelize = new Sequelize(config.urlDB, {
  logging: false,
  native: false,
  /*
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  */
});

models(sequelize);

logger.log(sequelize.models);

module.exports = sequelize;
