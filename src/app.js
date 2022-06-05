const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const routes = require('./routes');
const middlewares = require('./utils/middlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(middlewares.allowOrigin);
app.set('port', config.port);

app.use('/api', routes);

app.use(middlewares.unkanowEndpoint);
app.use(middlewares.errorHandler);

module.exports = app;
