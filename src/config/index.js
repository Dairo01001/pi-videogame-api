const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3001;
const urlDB = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/videogames';
const urlFront = process.env.FRONT || 'http://localhost:3000';
const apiKey = process.env.API_KEY || '123456789';

module.exports = {
  port,
  urlDB,
  urlFront,
  apiKey,
};
