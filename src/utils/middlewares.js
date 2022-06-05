const logger = require('./logger');
const config = require('../config');

const unkanowEndpoint = (req, res) => {
  res.status(404).json({ message: 'unknow endpoint' });
};

const errorHandler = (err, req, res, next) => {
  logger.err(err.name);

  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid ID',
      error: err.message,
    });
  }

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({ message: messages });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return next(err);
};

const allowOrigin = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.urlFront);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  next();
};

module.exports = {
  unkanowEndpoint,
  errorHandler,
  allowOrigin,
};
