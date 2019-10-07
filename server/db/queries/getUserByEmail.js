const connection = require('../config/connection');

exports.getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT id,email,username,is_handyman,password FROM users WHERE email=$1',
    values: [email],
  };
  // sql body consistency
  return connection.query(sql);
};
