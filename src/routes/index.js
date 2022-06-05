const routes = require('express').Router();

const routeGame = require('./game');

routes.use('/game', routeGame);

module.exports = routes;
