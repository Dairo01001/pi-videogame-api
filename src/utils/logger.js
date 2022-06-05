/* eslint-disable no-console */

const log = (...args) => {
  console.log(...args);
};

const err = (...args) => {
  console.error(...args);
};

module.exports = {
  log,
  err,
};
