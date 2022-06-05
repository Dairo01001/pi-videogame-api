const app = require('./app');
const sequelize = require('./db');
const logger = require('./utils/logger');

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get('port'), () => {
    logger.log(`Server is running on http://localhost:${app.get('port')}`);
  });
});
