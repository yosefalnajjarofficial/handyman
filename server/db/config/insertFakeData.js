const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const insertFakeData = () => {
  const sql = readFileSync(join(__dirname, 'fakeData.sql')).toString();
  return connection.query(sql);
};

module.exports = insertFakeData;
