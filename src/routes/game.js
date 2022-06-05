const routeGame = require('express').Router();

routeGame.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

module.exports = routeGame;
