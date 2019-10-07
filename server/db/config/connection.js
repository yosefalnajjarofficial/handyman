const { Pool } = require('pg');

require('dotenv').config();

let dbUrl = '';
switch (process.env.NODE_ENV) {
  case 'production':
    dbUrl = process.env.DATABASE_URL;
    break;
  case 'test':
    dbUrl = process.env.TEST_DB_URL;
    break;
  case 'development':
    dbUrl = process.env.DEV_DB_URL;
    break;
  default:
    throw new Error('Database Url Not Found!');
}

console.log(process.env.NODE_ENV, 1111111111, dbUrl);
const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
