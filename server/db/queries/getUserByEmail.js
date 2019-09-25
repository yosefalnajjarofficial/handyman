const connection = require('../config/connection');

exports.getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT id,email,username,is_handyman,password FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};
